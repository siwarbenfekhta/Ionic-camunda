import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {

  public topic: any;
  public newsData: any;
  firstName: string;
  lastName: string;

  constructor(public api: ServiceService, private router: Router) { }


  ngOnInit() {

    const login = localStorage.getItem('login');
    const pwd = localStorage.getItem('password');
    this.api.getProfile(login, pwd).subscribe(res => {
      this.firstName = res['firstName'];
      this.lastName = res['lastName'];

    })
    console.log(login, pwd);
    this.api.listTask(login, pwd).subscribe(result => {
      console.log(result);
      this.newsData = result;
    },
      error => {
        this.router.navigate(['/login']);
      });

  }

  find(id) {
    this.router.navigate(['/taskform', id]);
  }
  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');

    this.router.navigate(['/login']);
  }

}
