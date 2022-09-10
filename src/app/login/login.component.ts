import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:Form={
    email:'',
    password:''
  }
  red1=false;
  red2=false;
  constructor(private router:Router) { }
  checkEmail:string='ucs19209@rmd.ac.in';
  checkPassword:string='123123';

isEmailfilled:boolean=false;
isPassfilled:boolean=false;
  ngOnInit(): void {
  }

validate(){
  if(this.form.email!=this.checkEmail){
    alert('incorrect');
  }
  else if(this.form.password!=this.checkPassword){
    alert('incorrect password');
  }
  else{
    this.router.navigateByUrl('/dashboard');
  }
}

}
