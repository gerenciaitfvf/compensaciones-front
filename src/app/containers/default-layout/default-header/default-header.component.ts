import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import decode from 'jwt-decode';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  user: any;

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService) {
    super();
  }
  ngOnInit(): void {
    this.init();
  }
  init() {
    const token: any = localStorage.getItem('token');
    if (token) {
      this.user = decode(token);
    }
  }
}
