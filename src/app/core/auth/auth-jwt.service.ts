import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthJwtService {
  constructor(public http: HttpClient, public router: Router) {
  }

  // get user form local storage
  public get currentUserValue() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  // THIS VERSION WILL WORK WITH LOCAL RUNNING SERVER
  // this is correct jwt auth
  public login(email, password): Observable<any> {
    const body = {email, password};
    return this.http.post<any>('http://localhost:3000/api/auth/test', body)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }

  public localLogin(body): boolean {
    if (body && body.password === 'admin123') {
      localStorage.setItem('currentUser', JSON.stringify(body));
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }
}
