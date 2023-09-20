import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  
    login() {
      // Perform registration logic here, e.g., sending data to the server
      // console.log('Registration submitted');
      // console.log('Username:', this.username);
      // console.log('Email:', this.email);
      // console.log('Password:', this.password);
      // console.log('Confirm Password:', this.confirmPassword);
    }
}
