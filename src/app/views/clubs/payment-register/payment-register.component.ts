import { Component, OnInit } from '@angular/core';
import { cilSearch } from '@coreui/icons';
import { ActivatedRoute } from '@angular/router';


interface Compensación {
  id: any,
  nombre?: any,
}

@Component({
  selector: 'app-payment-register',
  templateUrl: './payment-register.component.html',
  styleUrls: ['./payment-register.component.scss']
})


export class PaymentRegisterComponent implements OnInit {
  icon = {cilSearch}
  ident!: Compensación;
  constructor(private route:ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe((params => this.ident = params['id']))
  }

  

}
