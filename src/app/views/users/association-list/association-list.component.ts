import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPen, cilTrash } from '@coreui/icons';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-association-list',
  templateUrl: './association-list.component.html',
  styleUrls: ['./association-list.component.scss'],
})
export class AssociationListComponent implements OnInit {
  userType = "ASOCIACION"
  userlist: any[] = [];
  form: FormGroup;
  icon = { cilPen, cilTrash }
  user?: any
  visible: boolean = false

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(
          RegExp(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
          )
        ),
      ]),
      role: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    })

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
  get status() {
    return this.form.get('status');
  }
  get password() {
    return this.form.get('password');
  }

  init() {
    return this.authService.associationlist().subscribe((res: any) => {
      this.userlist = res;
    });
  }

  ngOnInit(): void {
    this.init();
  }

  selectUser(user: any) {
    this.user = {};
    this.email?.setValue(user.email);
    this.name?.setValue(user.name);
    this.role?.setValue(user.role);
    this.status?.setValue(user.status);
    this.user = user;
    this.visible = true;
  }

  updateUser() {
    if (
      !this.role?.errors?.['required'] &&
      !this.name?.errors?.['required'] &&
      !this.email?.errors?.['required'] &&
      !this.email?.errors?.['pattern']
    ) {
      let data: any = {
        id: this.user.id,
        role: this.role?.value,
        status: this.status?.value,
        email: this.email?.value,
        name: this.name?.value,
      };
      if (this.password?.value) {
        data.password = this.password.value;
      }
      console.log(data);
      this.authService.updateUser(data).subscribe((res: any) => {
        if (res.email) {
          Swal.fire({
            icon: 'error',
            title: 'No se puede realizar la actualización',
            text: 'correo ya registrado en otro usuario',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Usuario Actualizado con éxito',
          }).then(
            () => {
              this.visible = false;
              this.init();
            });
        }
      });
    }
  }
}
