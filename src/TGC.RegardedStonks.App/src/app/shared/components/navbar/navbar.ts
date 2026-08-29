import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';
import { AdminMode } from '../../../core/services/admin-mode';
import { AuthState } from '../../../core/services/auth-state';
import { RUNTIME_CONFIG } from '../../../core/models/runtime-config.model';

interface NavLink {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  protected readonly authState = inject(AuthState);
  protected readonly adminMode = inject(AdminMode);
  protected readonly runtimeConfig = inject(RUNTIME_CONFIG);

  private readonly breakpointObserver = inject(BreakpointObserver);
  protected readonly isHandset = toSignal(this.breakpointObserver.observe(Breakpoints.Handset).pipe(map((result) => result.matches)), {
    initialValue: false
  });

  protected readonly primaryLinks: NavLink[] = [
    { label: 'Overview', route: '/overview', icon: 'dashboard' },
    { label: 'Matches', route: '/matches', icon: 'show_chart' },
    { label: 'Tutorial', route: '/tutorial', icon: 'description' }
  ];

  protected readonly adminLinks: NavLink[] = [
    { label: 'All matches', route: '/admin/matches', icon: 'show_chart' },
    { label: 'All players', route: '/admin/players', icon: 'group' },
    { label: 'All events', route: '/admin/events', icon: 'bolt' }
  ];

  toggleAdminMode(): void {
    this.adminMode.toggle();
  }

  logout(): void {
    this.authState.logout();
  }
}
