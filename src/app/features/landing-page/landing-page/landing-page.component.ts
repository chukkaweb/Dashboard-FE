// landing-page.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add schemas if needed for custom elements
})
export class LandingPageComponent implements OnInit {
  showLoginModal: boolean = false;
  showOtpInput: boolean = false;
  loginForm!: FormGroup;
  otpForm!: FormGroup;
  isOtpValid: boolean = true;
   currentStep = 1;
  
  // New properties for simulated JWT and messages
  private tempJwt: string | null = null;
  public message: string | null = null;
  public messageType: 'success' | 'error' | null = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{4}$'),
        Validators.minLength(4),
        Validators.maxLength(4)
      ]]
    });
  }

  /**
   * Clears any messages displayed in the modal.
   */
  clearMessage(): void {
    this.message = null;
    this.messageType = null;
  }

  /**
   * Opens the login modal and resets its state.
   */
  openLoginModal(): void {
    this.showLoginModal = true;
    this.showOtpInput = false;
    this.loginForm.reset();
    this.otpForm.reset();
    this.isOtpValid = true;
    this.clearMessage(); // Clear messages on open
  }

  /**
   * Closes the login modal.
   */
  closeLoginModal(): void {
    this.showLoginModal = false;
    this.showOtpInput = false;
    this.loginForm.reset();
    this.otpForm.reset();
    this.isOtpValid = true;
    this.clearMessage();
    this.tempJwt = null; // Clear the temporary JWT on close
  }

  /**
   * Handles the mobile number verification and simulates JWT creation.
   * In a real app, this would be an API call.
   */
  verifyMobileNumber(): void {
    if (this.loginForm.valid) {
      this.clearMessage();
      console.log('Mobile Number Submitted:', this.loginForm.value.mobileNumber);

      // --- SIMULATED JWT GENERATION START ---
      // In a real application, the server would generate and send this JWT.
      const mobileNumber = this.loginForm.value.mobileNumber;
      const payload = {
        mobile: mobileNumber,
        exp: new Date().getTime() + (5 * 60 * 1000) // JWT expires in 5 minutes
      };
      // For this simulation, we'll just base64 encode the payload.
      // A real JWT would also have a header and be cryptographically signed.
      this.tempJwt = btoa(JSON.stringify(payload));
      // --- SIMULATED JWT GENERATION END ---
      
      this.showOtpInput = true;
      this.otpForm.reset();
      this.isOtpValid = true;
      this.message = 'OTP has been sent to your number.';
      this.messageType = 'success';
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  /**
   * Handles OTP verification using the simulated JWT.
   * In a real app, this would be a secure API call.
   */
  verifyOtp(): void {
    if (this.otpForm.valid) {
      this.clearMessage();
      const enteredOtp = this.otpForm.value.otp;
      const defaultOtp = '9999';

      // --- SIMULATED JWT VERIFICATION START ---
      if (!this.tempJwt) {
        this.message = 'Verification session expired. Please resend the OTP.';
        this.messageType = 'error';
        return;
      }

      try {
        const decodedPayload = JSON.parse(atob(this.tempJwt));
        const now = new Date().getTime();

        // Check if the JWT is expired
        if (now > decodedPayload.exp) {
          this.message = 'OTP session has expired. Please try again.';
          this.messageType = 'error';
          this.closeLoginModal();
          return;
        }

        // We can also verify the mobile number from the JWT payload
        if (decodedPayload.mobile !== this.loginForm.value.mobileNumber) {
           this.message = 'Verification failed. Mobile number mismatch.';
           this.messageType = 'error';
           return;
        }
      } catch (e) {
        this.message = 'Invalid verification token. Please try again.';
        this.messageType = 'error';
        return;
      }
      // --- SIMULATED JWT VERIFICATION END ---

      // OTP validation
      if (enteredOtp === defaultOtp) {
        console.log('OTP Verified Successfully!');
        this.isOtpValid = true;
        this.message = 'Login Successful!';
        this.messageType = 'success';

        // In a real app, a final, long-lived JWT would be issued here.
        // For demonstration, we'll just log it.
        console.log('Final JWT issued and stored.');

        // For this example, we'll close the modal after a short delay
        setTimeout(() => {
          this.closeLoginModal();
        }, 2000);
      } else {
        console.log('Invalid OTP');
        this.isOtpValid = false;
        this.message = 'Invalid OTP. Please try again.';
        this.messageType = 'error';
      }
    } else {
      this.otpForm.markAllAsTouched();
      this.isOtpValid = true; // Clear the invalid OTP state if user is re-entering
    }
  }
}
