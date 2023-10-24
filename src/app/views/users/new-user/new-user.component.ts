import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  form: FormGroup;
  visiblePass: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: this.fb.control('', Validators.required),
      role: this.fb.control('club', Validators.required),
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(
          RegExp(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
          )
        ),
      ]),
    });
  }
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get role() {
    return this.form.get('role');
  }

  ngOnInit() {}
  registerUser() {
    if (
      !this.name?.errors?.['required'] &&
      !this.email?.errors?.['required'] &&
      !this.email?.errors?.['pattern']
    ) {
      let data = {
        name: this.name?.value,
        email: this.email?.value,
        role: this.role?.value,
        password: this.generateRandomString(8),
      };
      console.log(data);
      this.authService.register(data).subscribe(
        (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Usuario registrado con exito',
          }).then(() => {
            this.router.navigateByUrl('/usuarios/admin');
          });
        },
        (error: any) => {
          if (error.error.email) {
            Swal.fire({
              icon: 'error',
              title: 'No se puede realizar el registro',
              text: 'correo ya registrado en otro usuario',
            });
          }
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se puede realizar el registro',
        text: 'Debe llenar el formulario correctamente',
      });
    }
  }
  generateRandomString(num: any) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = Math.random().toString(36).substring(0, num);

    return result1;
  }
}
