import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public titleStyle={
    color:"blue",
    font:"italic"
  }
  email : string;
password : string;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
  }

  loginClicked(){
this.dataService.checkLogin(this.email,this.password);
  

  }

}
