import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public router = inject(Router);
  private _loginSvc = inject(AuthService);
  private _toastrSvc = inject(ToastrService);

  public loginForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  public login() {
    this._loginSvc.login(this.loginForm.value).subscribe(isLogin => {
      if (isLogin) {
        this._toastrSvc.success(this.loginForm.get('user')?.value, 'Bienvenido');
        this.router.navigate(['/dashboard']);
      } else {
        this._toastrSvc.error('Usuario o contraseñas incorrectos', 'Error');
      }
    })
  }
}
