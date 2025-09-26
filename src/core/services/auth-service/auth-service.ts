import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  users : User[] = [
    {
      id: 1, 
      email: 'admin',
      password: 'admin',
      role: 'admin'
    },
    {
      id: 2, 
      email: 'user',
      password: 'user',
      role: 'user'
    }
  ]

  isLoggedService = signal<boolean>(false);
  isAdminService = signal<boolean>(false);

  constructor() {
    // verification en cas de refresh de la page pour l'etat de connexion
    const isLogged = localStorage.getItem('isLogged');
    if(isLogged){
      this.isLoggedService.set(true);
    }
    
    // verification en cas de refresh de la page pour le role admin
    const role = localStorage.getItem('role');

    if( role === 'admin'){
      this.isAdminService.set(true);
    }
  }

  login(email:string,password : string){
    const user = this.users.find(u => u.email === email);
      if(user && user.password === password){

        // authentification reussie
        localStorage.setItem('isLogged', 'true');
        this.isLoggedService.set(true);

        if(user.role === 'admin'){
          // si l'utilisateur est admin on stock son role dans le localstorage
          // et on met a jour le signal isAdminService
          localStorage.setItem('role','admin')
          this.isAdminService.set(true);
      }else{
          localStorage.setItem('role','user')
      }
    }
  }
  

  logout(){
    // vider les elements du localstorage
    localStorage.removeItem('isLogged');
    localStorage.removeItem('role');

    // mettre a jour les signaux
    this.isLoggedService.set(false);
    this.isAdminService.set(false);
  }
}
