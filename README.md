# Dashboard-FE

## Tech stack 
Angular v17 maintain document 
Bootstrap 5  through npm install 

## Modules Overview
 Module                                         Description                                      
 CoreModule                                 Auth, guards, interceptors, singleton services   
 SharedModule                             Reusable components (e.g., modal, table, spinner)
 AuthModule                                 Login, role-based redirection  
 LandingModule                          Public landing page    
 ProfileModule                            Profile & logout    

## Shared Components Ideas
 HeaderComponent
 ConfirmDialogComponent
 LoadingSpinnerComponent
 ErrorMessageComponent
Core Services & Security
 Service/Guard                            Purpose                              
 AuthService                                 Handles login, JWT storage, user role
 AuthGuard                                   Prevents unauthorized access         
 RoleGuard                                   Restricts based on user roles        
 TokenInterceptor Attaches          JWT token to API calls      
 ErrorInterceptor                           Catches & logs errors from API       
## Config, Constants, and Utils
config/app.config.ts
export const AppConfig = {
  apiBaseUrl: 'https://api.example.com/',
  otpTimeout: 30, seconds
};
constants/roles.ts
export const Roles = {
  ADMIN: 'admin',
  USER: 'user',
  SALES: 'sales'
};
utils/helpers.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN').format(date);
}
Models (Interfaces)
export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
  createdAt: string;
}
export interface Order {
  id: string;
  status: 'pending' 'processing' 'completed';
  customer: Customer;
  items: Product[];
}
export interface User {
  id: string;
  name: string;
  mobile: string;
  role: string;
  token?: string;
}

## Best Practices
Security
 JWT token in HttpOnly cookie (preferred) or localStorage
 
