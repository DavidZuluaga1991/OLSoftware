import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Login } from '../../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _http = inject(HttpClient);

  public login(userLogin: Login): Observable<boolean> {
    const {user, password} = userLogin;
    return this._http.get<Login[]>(` http://localhost:3000/login?user=${user}&password=${password}`).pipe(map(users => {
      if (users.length > 0) sessionStorage.setItem('token', JSON.stringify(users[0]))
      return users.length > 0;
    }));
  }

  public isAuthenticated(): boolean {
    return true;
  }
}
