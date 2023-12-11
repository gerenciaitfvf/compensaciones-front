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
  clubItems: any;
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
    let club = this.authService.isClub();
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
          children: [
            {
              name: 'Administración Club',
              url: '/usuarios/club'
            },
            {
              name: 'Administración FVF',
              url: '/usuarios/admin'
            },
            {
              name: 'Administración Asociaciones',
              url: '/usuarios/asociaciones'
            },
            /* {
               name: 'Registro de usuarios',
               url: '/usuarios/registro'
             },*/

          ]
        },

      ];
      let index = _.findIndex(this.navItems, this.adminItems);
      if (index < 0) {
        this.navItems.push(this.adminItems[0]);
        this.navItems.push(this.adminItems[1]);
      }
    } else if (club) {
      this.clubItems = [
        {
          name: 'Panel de control Club',
          url: '/dashboard',
          iconComponent: { name: 'cil-speedometer' },
        },
        {
          name: 'Pagos pendientes',
          iconComponent: { name: 'cil-money' },
          url: 'clubs/pendientes',
        },

      ];
      let index = _.findIndex(this.navItems, this.clubItems);
      if (index < 0) {
        this.navItems.push(this.clubItems[0]);
        this.navItems.push(this.clubItems[1]);
      }

    } else {
      this.adminItems = [
        {
          name: 'Panel de control Asociacion',
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
