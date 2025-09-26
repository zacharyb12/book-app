import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service/auth-service';
import { Login } from "../login/login";

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    Login
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isAdminNavbar = signal<boolean>(false);

   readonly authService = inject(AuthService)

  constructor() {
    this.isAdminNavbar = this.authService.isAdminService;
  }
}
