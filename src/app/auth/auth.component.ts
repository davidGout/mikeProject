/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthActions, AuthStateHelper, Credentials } from './shared';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  hidePassword: boolean;
  error$: Observable<Error>;
  buttonDisabled$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private authActions: AuthActions,
    private authStateHelper: AuthStateHelper
  ) {
      this.hidePassword = true;
  }

  ngOnInit() {
    this.setForm();
    this.getLoginError();
    this.handleButtonState();
  }

  setForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    if (this.form.valid) {
      const payload: Credentials = <Credentials>this.form.value;
      this.store.dispatch(this.authActions.login(payload));
    }
  }

  getLoginError(): void {
    this.error$ = this.authStateHelper.getLoginError();
  }

  private handleButtonState(): void {
    this.buttonDisabled$ = combineLatest(
      this.authStateHelper.getLoginLoading(),
      this.authStateHelper.getIdentity()
    ).pipe(map(states => states.some(state => !!state)));
  }
}
*/
