import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from '../../../layout/main-header/main-header.component';
import { SideNavBarComponent } from '../../../layout/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, 
    RouterModule,
    MainHeaderComponent,
    SideNavBarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {




}
