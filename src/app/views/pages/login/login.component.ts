import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  login() {
    let data = { email: 'alejandro.jauregui@fvf.com.ve', password: 'password' };
    this.authService.login(data).subscribe((res: any) => {
      console.log(res)
    });
  }
}
