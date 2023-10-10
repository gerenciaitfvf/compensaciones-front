import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  alerts: any = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.get('ALERTS').subscribe((alerts: any) => {
      this.alerts = alerts;
    });
  }
  canActivate(): boolean {
    if (!this.authService.isAdmin()) {
      console.log('Usuario no autorizado');
      Swal.fire({
        icon: 'error',
        title: this.alerts['UNAUTHORIZED'],
      });
      return false;
    } else {
      return true;
    }
  }
}
