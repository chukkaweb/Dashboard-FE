import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss'
})
export class SideNavBarComponent {
  navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'bi-speedometer2' },
    { label: 'Users', path: '/users', icon: 'bi-people' },
    { label: 'Settings', path: '/settings', icon: 'bi-gear' }
  ];
isCollapsed = false;
 get sidebarWidth(): string {
    return this.isCollapsed ? '80px' : '250px';
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
