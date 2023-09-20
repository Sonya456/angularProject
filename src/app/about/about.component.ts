// about.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Client } from 'src/models/client';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // constructor(private service: HttpClient) {
  //   service.get<Client[]>('https://localhost:5001/api/Clients/GetAll').subscribe(x => this.clients = x);
  // }

  // clients: Client[] = [];
  names: string[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<string[]>('https://localhost:5001/api/Name/GetNames')
      .subscribe(data => {
        this.names = data;
      });
  }
}

