import { Component } from '@angular/core';
import { ReactiveFormsModule ,  FormBuilder, FormGroup, Validators } from '@angular/forms';

declare const bootstrap: any; // For Bootstrap modal handling

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm: FormGroup;
  currentStep = 1;
  modalInstance: any;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      otp: ['', [Validators.required, Validators.pattern('^\\d{6}$')]],
    });
  }

  get mobile() {
    return this.loginForm.get('mobile');
  }

  get otp() {
    return this.loginForm.get('otp');
  }

  openLoginModal() {
    this.currentStep = 1;
    this.loginForm.reset();
    const modalElement = document.getElementById('loginModal');
    this.modalInstance = new bootstrap.Modal(modalElement);
    this.modalInstance.show();
  }

  onSubmit() {
    if (this.currentStep === 1 && this.mobile?.valid) {
      // Simulate OTP send
      console.log('OTP sent to', this.mobile?.value);
      this.currentStep = 2;
    } else if (this.currentStep === 2 && this.otp?.valid) {
      // Simulate OTP verify
      console.log('OTP verified:', this.otp?.value);
      this.modalInstance.hide();
    }
  }

  resendOtp() {
    console.log('OTP resent to', this.mobile?.value);
  }
}


