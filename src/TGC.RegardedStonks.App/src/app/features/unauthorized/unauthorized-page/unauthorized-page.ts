import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthState } from '../../../core/services/auth-state';

@Component({
  selector: 'app-unauthorized-page',
  imports: [MatButtonModule],
  templateUrl: './unauthorized-page.html',
  styleUrl: './unauthorized-page.scss'
})
export class UnauthorizedPage {
  protected readonly authState = inject(AuthState);

  login(): void {
    this.authState.login();
  }
}
