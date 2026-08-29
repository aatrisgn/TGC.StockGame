import { Injectable, effect, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'tgc-regarded-stonks:theme';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  readonly mode = signal<ThemeMode>(this.resolveInitialMode());

  constructor() {
    effect(() => {
      const mode = this.mode();
      document.documentElement.classList.toggle('theme-dark', mode === 'dark');
      document.documentElement.classList.toggle('theme-light', mode === 'light');
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    });
  }

  toggle(): void {
    this.mode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  setMode(mode: ThemeMode): void {
    this.mode.set(mode);
  }

  private resolveInitialMode(): ThemeMode {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
