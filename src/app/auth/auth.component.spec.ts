/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material.module';
import { AuthComponent } from './auth.component';
import { AuthActions, AuthService, AuthStateHelper, Credentials } from './shared';

describe('AuthComponent', () => {
  let component:  AuthComponent;
  let fixture:    ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [
        AuthService,
        AuthStateHelper,
        AuthActions,
        Store
      ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        StoreModule.forFeature('authStore', {}),
        StoreModule.forRoot(t => t, {})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create component', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('ngOnInit', () => {
    it('should init component', () => {
      const setFormSpy = spyOn(component, 'setForm');

      component.ngOnInit();

      expect(setFormSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('setForm', () => {
    it('should set form', () => {

      component.setForm();

      expect(component.form.value.email).toEqual('');
      expect(component.form.value.password).toEqual('');
    });
  });

  describe('login', () => {
    it('should login', () => {
      spyOn(component['store'], 'dispatch');
      spyOn(component['authActions'], 'login');

      component.form.get('email').setValue('onch@onch.fr');
      component.form.get('password').setValue('biche');

      component.login();

      const expected = <Credentials>{
        email: 'onch@onch.fr',
        password: 'biche'
      };
      expect(component['store'].dispatch).toHaveBeenCalledTimes(1);
      expect(component['authActions'].login).toHaveBeenCalledWith(expected);

    });

    it('should try login without credentials', async(() => {
      const button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();
      fixture.detectChanges();

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const error = fixture.debugElement.nativeElement.querySelectorAll('mat-error');
        expect(error[0].textContent.trim()).toEqual('Le champ email est obligatoire');
        expect(error[1].textContent.trim()).toEqual('L\'email saisi est invalide');
        expect(error[2].textContent.trim()).toEqual('Le champ password est obligatoire');
      });
    }));
  });
});
*/
