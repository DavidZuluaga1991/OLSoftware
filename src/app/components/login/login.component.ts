import { Component, inject } from '@angular/core';
import { Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public router = inject(Router);

  public loginForm: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  public login( ) {
    this.router.navigate(['/dashboard']);
  }
}
