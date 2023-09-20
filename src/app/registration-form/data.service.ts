import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  registerUser(username: string, email: string, password: string) {
    // Implement your registration logic here, e.g., sending data to the server
    const userData = {
      username: username,
      email: email,
      password: password
    };

    return this.http.post('/api/register', userData);
  }

  validateUsername(username: string) {
    // Implement your username validation logic here, e.g., check if username is available
    return this.http.get<boolean>(`/api/validate-username?username=${username}`);
  }

  validateEmail(email: string) {
    // Implement your email validation logic here, e.g., check if email is valid and available
    return this.http.get<boolean>(`/api/validate-email?email=${email}`);
  }
}
