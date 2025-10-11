import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://api.example.com';
  private tokenKey = 'auth_token';
  private loginDateKey = 'login_date';

  constructor(private http: HttpClient) {}

  login(mobile: string, password: string): Observable<any> {
       return this.http.post(`${this.baseUrl}/login`, { mobile, password }).pipe(
      tap((res: any) => {
          if (res?.token) {
            localStorage.setItem(this.tokenKey, res.token);
            localStorage.setItem(this.loginDateKey, new Date().toDateString());
          }
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    const loginDate = localStorage.getItem(this.loginDateKey);
    const today = new Date().toDateString();

    if (!token || loginDate !== today) {
      this.logout();
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.loginDateKey);
  }

  getToken():string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
