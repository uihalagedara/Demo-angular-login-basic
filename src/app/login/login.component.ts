import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string="";
  password: string=""

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigateByUrl('/register');
  }

  Login() {
    let bodyData = {
      username: this.username,
      password: this.password
    };
    
    this.http.post("http://localhost:8080/api/auth/signin", bodyData,{responseType: 'text'}).subscribe((resultData: any)=>{
       if(JSON.parse(resultData).username){
        alert(JSON.parse(resultData).username+' logged in succssfuly')
       }else{
        alert("Error")
       } 
        
    })
  }

}
