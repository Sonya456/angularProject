import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '/home/sonya/ang_app/my-app/server/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;

  registration() {
    // Perform registration logic here, e.g., sending data to the server
    console.log('Registration submitted');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
  }
}
