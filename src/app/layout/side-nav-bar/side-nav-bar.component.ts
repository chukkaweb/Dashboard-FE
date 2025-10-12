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
    { label: 'Overview', path: '/dashboard/overview', icon: 'bi-speedometer2' },
    { label: 'Products', path: '/dashboard/products', icon: 'bi-people' }
  ];
isCollapsed = false;
 get sidebarWidth(): string {
    return this.isCollapsed ? '80px' : '250px';
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
