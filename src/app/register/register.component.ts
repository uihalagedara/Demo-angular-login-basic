import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String="";
  email: String="";
  password: String="";
  role: Array<String>=["user", "mod"];

  constructor(private http: HttpClient) { }

  save(){
    let bodyData = {
      "username": this.username,
      "email": this.email,
      "password": this.password,
      "role": this.role
    }
    this.http.post("http://localhost:8080/api/auth/signup", bodyData,{responseType: 'text'}).subscribe((resultData: any)=>{
      alert(JSON.parse(resultData).message)
    })
  }

  ngOnInit(): void {
  }

}
