import { Injectable, signal } from '@angular/core';

/**
 * UI-only toggle for showing the admin section of the navbar.
 * Not a security boundary - real enforcement happens server-side.
 */
@Injectable({
  providedIn: 'root'
})
export class AdminMode {
  readonly enabled = signal(false);

  toggle(): void {
    this.enabled.update((value) => !value);
  }
}
