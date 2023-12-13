import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = `${environment.apiurl}/users`;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(data: any) {
    return this.http.post(`${this.URL}/login`, data);
  }
  isAuth(): boolean {
    const token: any = localStorage.getItem('token');

    if (
      this.jwtHelper.isTokenExpired(token) ||
      !localStorage.getItem('token')
    ) {
      return false;
    } else {
      return true;
    }
  }
  isAdmin() {
    const token: any = localStorage.getItem('token');
    if (token) {
      let user: any = decode(token);
      let role = user.role;
      if (role == 'admin') {
        return true;
      }
      return false;
    }
    return false;
  }
  isAssociation() {
    const token: any = localStorage.getItem('token');
    if (token) {
      let user: any = decode(token);
      let role = user.role;
      if (role == 'asociacion') {
        return true;
      }
      return false;
    }
    return false;
  }
  isClub() {
    const token: any = localStorage.getItem('token');
    if (token) {
      let user: any = decode(token);
      let role = user.role;
      if (role == 'club') {
        return true;
      }
      return false;
    }
    return false;
  }
  adminlist() {
    return this.http.get(`${this.URL}/admin`);
  }
  updateUser(data: any) {
    return this.http.put(`${this.URL}/${data.id}`, data);
  }
  register(data: any) {
    return this.http.post(`${this.URL}/register`, data);
  }
  clublist() {
    return this.http.get(`${this.URL}/club`);
  }
  associationlist() {
    return this.http.get(`${this.URL}/association`);
  }
  changePassword(data: any) {
    return this.http.post(`${this.URL}/change-password`, data);
  }
  sendEmail(data: any) {
    return this.http.post(`${this.URL}/send-email`, data);
  }
  getByHash(data: any) {
    let params = new HttpParams().set('hash', data);
    return this.http.get(`${this.URL}/get-by-hash`, { params });
  }
}
