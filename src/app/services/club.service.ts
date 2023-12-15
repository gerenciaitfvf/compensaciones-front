import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {environment} from '../../environments/environment' 

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private URL = `${environment.apiurl}/clubs`;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  
}
