import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email:any="";
  password:any="";
  isCorrectCredential:any=true;

  constructor(
     private  auth:AuthService,
     private router:Router
  ){

  }

 

login(){
  let res=this.auth.login(this.email,this.password)
  if(res===200){
    this.router.navigate(["home"])
  }
  else{
this.isCorrectCredential=false
  }
}

}
