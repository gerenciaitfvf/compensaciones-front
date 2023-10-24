import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  public navItems: any;
  public navFooter: any;
  adminItems: any;
  licenseItems: any;

  constructor(private router: Router,
    private authService: AuthService
  ) {
    this.getMenu();
  }
  ngOnInit(): void {
    if (this.router.url == '/') {
      this.router.navigateByUrl('/dashboard');
    }
  }
  getMenu() {
    let admin = this.authService.isAdmin();
    let association = this.authService.isAssociation();
      this.navFooter = [
        {
          name: 'Cerrar sesión',
          url: '/login',
          iconComponent: { name: 'cil-account-logout' },
        },
      ];
      this.navItems = [];
      if (admin) {
        this.adminItems = [
          {
            name: 'Panel de control',
            iconComponent: { name: 'cil-speedometer' },
            url: '/dashboard/admin'
          },
          {
            name: 'Usuarios del sistema',
            iconComponent: { name: 'cil-user-plus' },
            children:[
              {
                name: 'Administración Club'
              },
              {
                name: 'Administración FVF',
                url: '/usuarios/admin'
              },
              {
                name: 'Administración Asocioaciones'
              },
              {
                name: 'Resgistro de usuarios',
                url: '/usuarios/registro'
              },

            ]
          },
          
        ];
        let index = _.findIndex(this.navItems, this.adminItems);
        if (index < 0) {
          this.navItems.push(this.adminItems[0]);
          this.navItems.push(this.adminItems[1]);
        }
      } else if (association) {
        this.adminItems = [
          {
            name:  'Panel de control Asociacion' ,
            iconComponent: { name: 'cil-speedometer' },
          },
        ];
        let index = _.findIndex(this.navItems, this.adminItems);
        if (index < 0) {
          this.navItems.push(this.adminItems[0]);
        }
      } else {
        this.adminItems = [
          {
            name:  'Panel de control CLub',
            url: '/dashboard',
            iconComponent: { name: 'cil-speedometer' },
          },
        ];
        let index = _.findIndex(this.navItems, this.adminItems);
        if (index < 0) {
          this.navItems.push(this.adminItems[0]);
        }
      }
    
  }
}
