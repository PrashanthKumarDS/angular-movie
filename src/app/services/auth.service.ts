import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }



  login(email:any,password:any){
    console.log(email)
    console.log(password)


    if(email==='IronMan' && password==="123456"){
      console.log("logedin")
      return 200;
    }
    else{
      return 400;
    }

  }


  logout(){
   return 200;
  }

}
