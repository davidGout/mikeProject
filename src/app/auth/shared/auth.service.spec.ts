import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MockRouter } from '../../../../mock-helper';
import { WindowRef } from '../../shared/window/window.service';
import { AppConfig } from './../../shared/app-config/app-config.model';
import { AppStorage } from './../../shared/app-storage/app-storage.service';
import { Credentials, Identity } from './auth.model';
import { AuthService } from './auth.service';

describe('Auth Service', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let winRef: WindowRef;
  let appStorage: AppStorage;
  let router: Router;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AppStorage,
        AuthService,
        { provide: Router, useClass: MockRouter },
        { provide: WindowRef, useClass: createWindow },
        { provide: AppConfig, useValue: { apiEndpoint: 'http://some_api_url/api', loginRoute: '/login' } }
      ]
    });

    function createWindow() {
      const window = new WindowRef();
      window.nativeWindow.localStorage.clear();
      // properties are read-only otherwise
      return window;
    }

    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    winRef = TestBed.get(WindowRef);
    router = TestBed.get(Router);
    appStorage = TestBed.get(AppStorage);
  });

  describe('login()', () => {
    it('should retrieve an identity object', () => {
      const mockCredentials = <Credentials>{ email:  'test@test.fr' };
      const mockIdentity = <Identity>{ hash: '123456' };
      const setLocalStorageSpy = spyOn( service, 'setLocalStorage');

      service.login(mockCredentials).subscribe((identity: Identity) => {
        expect(identity).toEqual(
          <Identity>{ hash: '123456' }
        );
      });

      const mockReq = httpMock.expectOne('http://some_api_url/api/auth/admin');
      mockReq.flush( mockIdentity );
      expect(mockReq.request.responseType).toEqual('json');
      httpMock.verify();

      expect(setLocalStorageSpy).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when http call failed', () => {
      const mockCredentials = <Credentials>{ email:  'test@test.fr' };

      service.login(mockCredentials).subscribe(
        data => data,
        (error: HttpErrorResponse) => {
          expect(error instanceof HttpErrorResponse).toBe(true);
        }
      );
      const mockReq = httpMock.expectOne('http://some_api_url/api/auth/admin');
      mockReq.error(new ErrorEvent('some_error'));
      httpMock.verify();
    });
  });

  describe('getIdentity', () => {
    it('should set local storage and retrieve an identity object', () => {
      const getItemSpy = spyOn(winRef.nativeWindow.localStorage, 'getItem').and.callThrough();
      const setItemSpy = spyOn(winRef.nativeWindow.localStorage, 'setItem').and.callThrough();
      service.getIdentity('method', 'token').subscribe((response: any) => {
        expect(getItemSpy).toHaveBeenCalledTimes(1);
        expect(setItemSpy).toHaveBeenCalledTimes(2);
        expect(response).toEqual({ hash: 'hash', method: 'method', userLogin: 'login' });
      });

      const mockReq = httpMock.expectOne('http://some_api_url/api/auth');
      mockReq.flush({ hash: 'hash', method: 'method', userLogin: 'login' });
      expect(mockReq.request.responseType).toEqual('json');
      httpMock.verify();
    });

    it('should not set local storage if already set', () => {
      winRef.nativeWindow.localStorage.setItem('X-Auth-Token', 'token');
      winRef.nativeWindow.localStorage.setItem('X-Auth-Method', 'method');

      const getItemSpy = spyOn(winRef.nativeWindow.localStorage, 'getItem').and.callThrough();
      const setItemSpy = spyOn(winRef.nativeWindow.localStorage, 'setItem').and.callThrough();

      service.getIdentity('method', 'token').subscribe((response: any) => {
        expect(getItemSpy).toHaveBeenCalledTimes(2);
        expect(setItemSpy).not.toHaveBeenCalled();
        expect(response).toEqual({ hash: 'hash', method: 'method', userLogin: 'login' });
      });

      const mockReq = httpMock.expectOne('http://some_api_url/api/auth');
      mockReq.flush({ hash: 'hash', method: 'method', userLogin: 'login' });
      expect(mockReq.request.responseType).toEqual('json');
      httpMock.verify();
    });

    it('should throw an error when http call failed', () => {
      service.getIdentity('method', 'token').subscribe(
        data => data,
        (error: HttpErrorResponse) => {
          expect(error instanceof HttpErrorResponse).toBe(true);
        }
      );
      const mockReq = httpMock.expectOne('http://some_api_url/api/auth');
      mockReq.error(new ErrorEvent('some_error'));
      httpMock.verify();
    });
  });

  describe('logout()', () => {
    it('should logout the user', () => {
      spyOn(appStorage, 'clear');

      service.logout().subscribe(() => {
        expect(appStorage.clear).toHaveBeenCalledTimes(1);
        expect(router.navigate).toHaveBeenCalledWith(['/login']);
      });

      const mockReq = httpMock.expectOne('http://some_api_url/api/auth/logout');
      mockReq.flush(null);
      httpMock.verify();
    });
  });
});
