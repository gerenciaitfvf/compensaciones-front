import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cilPen, cilTrash } from '@coreui/icons';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  userlist: any[] = [];
  user?: any;
  icon = { cilPen, cilTrash };
  visible: boolean = false;
  form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      role: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
    });
  }
  get role() {
    return this.form.get('role');
  }
  get status() {
    return this.form.get('status');
  }
  ngOnInit() {
    this.init();
  }
  init() {
    this.authService.adminlist().subscribe((res: any) => {
      console.log(res);
      this.userlist = res;
    });
  }
  selectUser(user: any) {
    this.user = {};
    this.role?.setValue(user.role);
    this.status?.setValue(user.status);
    this.user = user;
    this.visible = true;
  }
  updateUser() {
    if (!this.role?.errors?.['required']) {
      console.log('Hola vale');
      let data = {
        id: this.user.id,
        role: this.role?.value,
        status: this.status?.value,
      };
      console.log(data);
      this.authService.updateUser(data).subscribe((res: any) => {
        Swal.fire('Hecho!', 'Usuario actualizado con exito', 'success').then(
          () => {
            this.visible = false;
            this.init();
          }
        );
      });
    }
  }
}
