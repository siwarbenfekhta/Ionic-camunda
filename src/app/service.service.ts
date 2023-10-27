import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(public http: HttpClient) { }

  getAll(username, password) {
    const credentials = username + ':' + password
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(credentials)
      })
    };
    return this.http.get('http://digitalisi.tn:8080/engine-rest/process-definition?latest=true', httpOptions);
  }


  getVars(id, username, password) {
    console.log(id);
    const credentials = username + ':' + password

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(credentials)
      })
    };
    return this.http.get('http://digitalisi.tn:8080/engine-rest/process-definition/' + id + '/form-variables', httpOptions);
  }
  getTaskVars(id, username, password) {
    console.log(id);
    const credentials = username + ':' + password

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(credentials)
      })
    };
    return this.http.get('http://digitalisi.tn:8080/engine-rest/task/' + id + '/form-variables', httpOptions);
  }

  getProfile(id, password) {
    const credentials = id + ':' + password
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(credentials)
      })
    };
    return this.http.get('http://digitalisi.tn:8080/engine-rest/user/' + id + '/profile', httpOptions);
  }
  submitForm(id, username, password, body) {
    const credentials = username + ':' + password
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(credentials)
      })
    };
    return this.http.post('http://digitalisi.tn:8080/engine-rest/process-definition/' + id + '/submit-form', body, httpOptions);
  }
  listTask(username, password) {
    const credentials = username + ':' + password
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(credentials)
      })
    };
    return this.http.get('http://digitalisi.tn:8080/engine-rest/task/', httpOptions);
  }

  completeTask(id, username, password, body) {
    const credentials = username + ':' + password
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(credentials)
      })
    };
    return this.http.post('http://digitalisi.tn:8080/engine-rest/task/' + id + '/complete', body, httpOptions);
  }
}

