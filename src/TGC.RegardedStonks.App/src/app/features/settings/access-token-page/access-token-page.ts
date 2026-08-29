import { Component, computed, inject, resource } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { firstValueFrom } from 'rxjs';
import { decodeJwtPayload } from '../../../core/utils/jwt-decode';
import { RUNTIME_CONFIG } from '../../../core/models/runtime-config.model';

interface TokenView {
  encoded: string;
  decoded?: Record<string, unknown>;
  decodeError?: string;
}

interface JwtClaimGlossaryEntry {
  claim: string;
  description: string;
}

const JWT_CLAIM_GLOSSARY: JwtClaimGlossaryEntry[] = [
  { claim: 'iss', description: 'Issuer — the identity provider that issued the token.' },
  { claim: 'aud', description: 'Audience — the intended recipient of the token (e.g. the API or client ID).' },
  { claim: 'exp', description: 'Expiration time — unix timestamp after which the token is no longer valid.' },
  { claim: 'nbf', description: 'Not before — unix timestamp before which the token must not be accepted.' },
  { claim: 'iat', description: 'Issued at — unix timestamp when the token was issued.' },
  { claim: 'sub', description: 'Subject — the unique identifier of the user the token represents.' },
  { claim: 'oid', description: "Object ID — the user's immutable identifier in the Entra directory." },
  { claim: 'tid', description: 'Tenant ID — the Entra directory the user belongs to.' },
  { claim: 'ver', description: 'Version — the token format version.' },
  { claim: 'name', description: "The user's display name." },
  { claim: 'preferred_username', description: "The user's preferred username, typically an email or UPN." },
  { claim: 'roles', description: 'App roles assigned to the user (see runtime config rolesClaimName).' },
  { claim: 'scp / scope', description: 'The delegated permissions (scopes) granted to the access token.' },
  { claim: 'azp / appid', description: 'Authorized party — the client application the token was issued to.' },
  { claim: 'nonce', description: 'A value used to mitigate replay attacks during token issuance.' }
];

@Component({
  selector: 'app-access-token-page',
  imports: [],
  templateUrl: './access-token-page.html',
  styleUrl: './access-token-page.scss'
})
export class AccessTokenPage {
  private readonly msal = inject(MsalService);
  protected readonly runtimeConfig = inject(RUNTIME_CONFIG);

  protected readonly glossary = JWT_CLAIM_GLOSSARY;

  protected readonly tokenResource = resource({
    loader: () => firstValueFrom(this.msal.acquireTokenSilent({ scopes: this.runtimeConfig.auth.apiScopes }))
  });

  protected readonly accessTokenView = computed<TokenView | undefined>(() => {
    const result = this.tokenResource.value();
    return result ? this.buildTokenView(result.accessToken) : undefined;
  });

  protected readonly identityTokenView = computed<TokenView | undefined>(() => {
    const result = this.tokenResource.value();
    return result ? this.buildTokenView(result.idToken) : undefined;
  });

  private buildTokenView(token: string): TokenView {
    try {
      return { encoded: token, decoded: decodeJwtPayload(token) };
    } catch (error) {
      return { encoded: token, decodeError: error instanceof Error ? error.message : 'Failed to decode token.' };
    }
  }

  protected claimEntries(decoded: Record<string, unknown>): [string, unknown][] {
    return Object.entries(decoded);
  }

  protected formatClaimValue(value: unknown): string {
    return typeof value === 'object' && value !== null ? JSON.stringify(value) : String(value);
  }
}
