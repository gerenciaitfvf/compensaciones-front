import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  token: any = localStorage.getItem('token');
  form: FormGroup;
  visiblePass: boolean = false;
  visiblePassword: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(
          RegExp(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
          )
        ),
      ]),
      password: this.fb.control('', Validators.required),
      previusPassword: this.fb.control('', Validators.required),
      pass: this.fb.control('', Validators.required),
    });
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get previusPassword() {
    return this.form.get('previusPassword');
  }
  get pass() {
    return this.form.get('pass');
  }

  ngOnInit(): void {}

  changePass() {
    if (this.password?.value != this.pass?.value) {
      this.visiblePass = true;
    } else {
      this.visiblePass = false;
    }
  }

  changePassword() {
    if (
      !this.email?.errors?.['required'] &&
      !this.email?.errors?.['pattern'] &&
      !this.password?.errors?.['required'] &&
      !this.pass?.errors?.['required'] &&
      !this.previusPassword?.errors?.['required'] &&
      !this.visiblePass
    ) {
      let data = {
        email: this.email?.value,
        previusPassword: this.previusPassword?.value,
        password: this.password?.value,
      };
      this.authService.changePassword(data).subscribe((res: any) => {
        if (res.pass) {
          Swal.fire({
            icon: 'error',
            title: 'No se puede realizar el el cambio',
            text: 'La contrasena antigua es incorrecta, revise su correo e intente nuevamente',
          });
        }  else if (res.msg) {
          Swal.fire({
            icon: 'error',
            title: 'Usuario Inactivo',
            text: 'Comunicarse con el administrador',
          });
        } else if (res.email) {
          Swal.fire({
            icon: 'error',
            title: 'No existe usuario con email suministrado',
            text: 'Asegurese de tener los datos correctos',
          });
        } else if (res.success) {
          Swal.fire({
            icon: 'success',
            title: 'Cambio realizado con exito',
            text: 'Ya puede iniciar sesion',
          }).then(()=>{
            this.router.navigateByUrl('/login')
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se puede realizar el el cambio',
        text: 'Debe llenar el formulario correctamente',
      });
    }
  }
}
