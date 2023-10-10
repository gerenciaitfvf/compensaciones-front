import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  token: any = localStorage.getItem('token');
  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {
    if (this.token) {
      this.logout();
    }
  }
  login() {
      if (
        !this.email?.errors?.['required'] &&
        !this.password?.errors?.['required']
      ) {
        let data = {
          email: this.email?.value,
          password: this.password?.value,
        };
        Swal.showLoading();
        this.authService.login(data).subscribe((res: any) => {
          if (res.email) {
            Swal.fire({
              icon: 'error',
              title: 'Correo no registrado en el sistema',
            });
          } else if (res.pass) {
            Swal.fire({
              icon: 'error',
              title: 'Contraseña incorrecta',
              text: 'Intente nuevamente',
            });
          } else if (res.msg) {
            Swal.fire({
              icon: 'error',
              title: 'Usuario inactivo',
              text: 'Debe comunicarse con el administrador para poder habilitar su cuenta',
            });
          } else if (res.password) {
            Swal.fire({
              icon: 'error',
              title: 'Usuario inactivo',
              text: 'Debe realizar el cambio de contraseña',
            });
          } else {
            const token = res;
            let user: any = decode(token);
            let role = user.role;
            localStorage.setItem('token', token);
            console.log(user)
            // if (role == 'admin') {
            //   this.router.navigateByUrl('dashboard/admin').then(() => {
            //     Swal.close();
            //   });
            // } else if (role == 'club') {
            //   this.router.navigateByUrl('dashboard').then(() => {
            //     Swal.close();
            //   });
            // } else {
            //   this.router.navigateByUrl('dashboard/license').then(() => {
            //     Swal.close();
            //   });
            // }
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'No se puede iniciar sesión',
          text: 'Debe llenar el formulario correctamente',
        });
      }
  }
  logout() {
    localStorage.clear();
    this.token = false;
  }
}
