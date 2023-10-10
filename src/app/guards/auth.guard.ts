import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (!this.authService.isAuth()) {
      console.log('El token no es válido o ya expiró');
      this.router.navigateByUrl('login');
      return false;
    } else {
      return true;
    }
  }
}
