import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthState } from '../../../core/services/auth-state';

@Component({
  selector: 'app-landing-page',
  imports: [MatButtonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  protected readonly authState = inject(AuthState);

  login(): void {
    this.authState.login();
  }
}
