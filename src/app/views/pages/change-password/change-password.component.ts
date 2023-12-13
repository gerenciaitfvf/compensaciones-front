import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  visibleHash: boolean = false;
  user: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute
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
      pass: this.fb.control('', Validators.required),
    });
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  get pass() {
    return this.form.get('pass');
  }

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.route.paramMap.subscribe((params) => {
      let hash = params.get('hash');
      if (hash) {
        this.visibleHash = true;
        this.authService.getByHash(hash).subscribe((res: any) => {
          if (res.error_hash) {
            Swal.fire({
              icon: 'error',
              title: 'El enlace ha expirado',
              text: 'Intente nuevamente',
            }).then(() => {
              this.router.navigateByUrl('/cambio-contrasena');
            });
          } else {
            this.user = res;
            this.email?.setValue(this.user.email);
            console.log(res);
          }
        });
      }
    });
  }

  changePass() {
    if (this.password?.value != this.pass?.value) {
      this.visiblePass = true;
    } else {
      this.visiblePass = false;
    }
  }

  changePassword() {
    if (
      !this.password?.errors?.['required'] &&
      !this.pass?.errors?.['required'] &&
      !this.visiblePass
    ) {
      let data = {
        email: this.email?.value,
        password: this.password?.value,
        id: this.user.id
      };
      console.log(data)
      this.authService.changePassword(data).subscribe((res: any) => {
       if (res.msg) {
          Swal.fire({
            icon: 'error',
            title: 'Usuario Inactivo',
            text: 'Comunicarse con el administrador',
          });
        }  else if (res.success) {
          Swal.fire({
            icon: 'success',
            title: 'Cambio realizado con exito',
            text: 'Ya puede iniciar sesion',
          }).then(() => {
            this.router.navigateByUrl('/login');
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
  sendEmail() {
    if (!this.email?.errors?.['required'] && !this.email?.errors?.['pattern']) {
      let data = {
        email: this.email?.value
      }
      this.authService.sendEmail(data).subscribe((res: any) => {
        if (res.inactive){
          Swal.fire({
            icon: 'error',
            title: 'No se puede realizar el el cambio',
            text: 'Comunicarse con el administrador',
          });
        } else if (res.errorSendEmail){
          Swal.fire({
            icon: 'error',
            title: 'Error al enviar correo',
            text: 'Comunicarse con el administrador',
          });
        } else if (res.email){
          Swal.fire({
            icon: 'error',
            title: 'Correo no registrado en el sistema',
            text: 'Verifique información e inténtelo nuevamente',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Correo enviado con éxito',
            text: 'Revise su bandeja de entrada del correo para reestablecer contraseña ',
          }).then(()=>{
            this.router.navigateByUrl('/login')
          })
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Usuario Inactivo',
        text: 'Debe llenar el formulario correctamente',
      });
    }
  }
}
