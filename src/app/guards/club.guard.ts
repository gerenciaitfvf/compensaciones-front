import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ClubGuard implements CanActivate {
  alerts: any = '';
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }
  canActivate(): boolean {
    if (!this.authService.isClub()) {
      console.log('Usuario no autorizado');
      Swal.fire({
        icon: 'error',
        title: 'Usuario no autorizado',
      })
      return false;
    } else {
      return true;
    }
  }
}
