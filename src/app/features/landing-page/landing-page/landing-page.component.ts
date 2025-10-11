// landing-page.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add schemas if needed for custom elements
})
export class LandingPageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

}
