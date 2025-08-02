## Dashboard-FE
### Tech Stack 
- **Angular v17**: Maintain document structure.
- **Bootstrap 5**: Installed via npm.

### Modules Overview
| Module          | Description                                      |
|------------------|--------------------------------------------------|
| **CoreModule**   | Auth, guards, interceptors, singleton services   |
| **SharedModule** | Reusable components (e.g., modal, table, spinner)|
| **AuthModule**   | Login, role-based redirection                   |
| **LandingModule**| Public landing page                             |
| **ProfileModule**| Profile & logout                                |

### Shared Components Ideas
- **HeaderComponent**
- **ConfirmDialogComponent**
- **LoadingSpinnerComponent**
- **ErrorMessageComponent**

### Core Services & Security
| Service/Guard       | Purpose                                       |
|---------------------|-----------------------------------------------|
| **AuthService**      | Handles login, JWT storage, user role         |
| **AuthGuard**        | Prevents unauthorized access                  |
| **RoleGuard**        | Restricts based on user roles                 |
| **TokenInterceptor** | Attaches JWT token to API calls               |
| **ErrorInterceptor** | Catches & logs errors from API                |

### Best Practices
#### Security
- Use **JWT token** in HttpOnly cookie (preferred) or localStorage.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

### Development Server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code Scaffolding
Run `ng generate component component-name` to generate a new component. You can also use:
- `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running End-to-End Tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further Help
To get more help on the Angular CLI, use `ng help` or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
