import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service/auth-service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  isLoggedLogin = signal<boolean>(false);

monForm : FormGroup;

private readonly fb = inject(FormBuilder)

private readonly authService = inject(AuthService);

constructor() {
  this.monForm = this.fb.group({
    email : ['',[Validators.required]],
    password : ['',[Validators.minLength(3)]]
  })

  this.isLoggedLogin = this.authService.isLoggedService;
}

login(){
  if(this.monForm.valid){
    this.authService.login(this.monForm.value.email, this.monForm.value.password);
  }
}

logout(){
  this.authService.logout();
}

}
