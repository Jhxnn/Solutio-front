import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        // Redireciona para dashboard
      },
      error: () => {
        alert('Usuário ou senha inválidos');
      }
    });
  }
}
