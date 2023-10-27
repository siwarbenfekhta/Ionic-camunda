import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  forms: FormGroup;
  error = false ;
  isChecked = false ;
  username: string;
  pass: string;
  constructor(private formBuilder: FormBuilder, private route: Router, public api: ServiceService) { }

  ngOnInit() {

    this.forms = this.formBuilder.group({
      login:new FormControl(null),
      password: new FormControl(null),

    });

    console.log(this.forms);
    this.username = localStorage.getItem('loginRegistred');
    this.pass = localStorage.getItem('passwordloginRegistred')
    console.log(this.username , this.pass);
  }

  OnCreate() {
    console.log(this.forms.value);
    const username = this.forms.get('login').value ;
    const pwd = this.forms.get('password').value ;
    localStorage.setItem("login" , username);
    localStorage.setItem("password" , pwd);
    this.api.getAll(username , pwd).subscribe(data => {

      window.location.href='/home'
  },
   error => {
      this.error = true ;
      this.route.navigate(['/login']);
      
  }
  );
  
  }

  checkboxClick(e){
    var statement = true;
    if(statement){
      e.checked = true;
    }
    if (e.checked == true ){
      const username = this.forms.get('login').value ;
      const pwd = this.forms.get('password').value ;
      localStorage.setItem("loginRegistred" , username);
      localStorage.setItem("passwordloginRegistred" , pwd);
    }
  }
}
