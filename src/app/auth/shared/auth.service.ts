/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { AppConfig } from './../../shared/app-config';
import { AppStorage } from './../../shared/app-storage/app-storage.service';
import { Credentials, Identity } from './auth.model';

@Injectable()
export class AuthService {
  static AuthMethodKey = 'X-Auth-Method';
  static AuthTokenKey = 'X-Auth-Token';

  constructor(
    private http: HttpClient,
    private appStorage: AppStorage,
    private router: Router,
    private config: AppConfig
  ) {}

  login(credentials: Credentials): Observable<Identity> {
    return this.http.post<Identity>(`${this.config.apiEndpoint}/auth/admin`, credentials)
      .pipe(
        tap(identity => this.setLocalStorage(identity.method, identity.hash))
      );
  }

  logout(): Observable<Object> {
    return this.http.delete(`${this.config.apiEndpoint}/auth/logout`)
      .pipe(
        tap(() => {
          this.appStorage.clear();
          this.router.navigate([this.config.loginRoute]);
        }));
  }

  setLocalStorage(method: string, token: string): void {
    this.appStorage.setItem(AuthService.AuthMethodKey, method);
    this.appStorage.setItem(AuthService.AuthTokenKey, token);
  }

  hasAuthDataInLocalStorage(): boolean {
    return !!(this.appStorage.getItem(AuthService.AuthMethodKey)
      && this.appStorage.getItem(AuthService.AuthTokenKey));
  }

  getIdentity(method: string, token: string): Observable<Identity> {
    if (!this.hasAuthDataInLocalStorage()) {
      this.setLocalStorage(method, token);
    }

    return this.http.get<Identity>(`${this.config.apiEndpoint}/auth`);
  }
}
*/
