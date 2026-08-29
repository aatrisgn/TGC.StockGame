import { Component, inject } from '@angular/core';
import { AuthState } from '../../../core/services/auth-state';

@Component({
  selector: 'app-overview-page',
  imports: [],
  templateUrl: './overview-page.html',
  styleUrl: './overview-page.scss'
})
export class OverviewPage {
  protected readonly authState = inject(AuthState);
}
