import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

declare const bootstrap: any; // For Bootstrap modal handling

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  @ViewChild('mobileInput') mobileInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.onModalOpen();
  }

  ngAfterViewInit() {
    this.mobileInput.nativeElement.focus();
  }

  onModalOpen() {
    this.loginForm.reset(); // ✅ resets fields when modal opens
    this.errorMessage = '';
  }

  get mobile() {
    return this.loginForm.get('mobile');
  }

  get pwd() {
    return this.loginForm.get('pwd');
  }

  restrictToTenDigits(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.value.length >= 10 && event.key !== 'Backspace') {
      event.preventDefault();
    }
  }

  onLogin() {
    if (this.loginForm.invalid) return;
    this.isLoading = true;
    const { mobile, password } = this.loginForm.value;

    this.authService.login(mobile, password).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.router.navigate(['/overview']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'Invalid username or password';
      }
    });
  }
}


