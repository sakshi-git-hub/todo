import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name: string;
number: BigInteger;
email: string;
password: string;
  constructor( private reg : DataService ) {  };


  ngOnInit() {
  }

  regClicked(){
this.reg.register(this.email,this.password);

  }
}
