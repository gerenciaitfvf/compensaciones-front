import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {environment} from 'src/environments/environment'

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
}
