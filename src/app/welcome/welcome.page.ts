import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { FormPage } from '../form/form.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  public topic: any;
  public newsData: any;
  firstName: string;
  lastName: string;
  login: string;

  constructor(public api: ServiceService, private router: Router) { }


  ngOnInit() {
    this.login = localStorage.getItem('login');
    const pwd = localStorage.getItem('password');
    
    this.api.getProfile(this.login, pwd).subscribe(res => {
      this.firstName = res['firstName'];
      this.lastName = res['lastName'];

    })
    this.api.getAll(this.login, pwd).subscribe(result => {
      console.log(result);
      this.newsData = result;
    },
      error => {
        this.router.navigate(['/login']);
      });

  }

  find(id) {
    this.router.navigate(['/form', id]);
  }
  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
  }

}
