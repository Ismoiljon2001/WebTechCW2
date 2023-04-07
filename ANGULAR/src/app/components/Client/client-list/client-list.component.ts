import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/Client.Models';
import { ClientsService } from 'src/app/Services/client-service.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  client: Client[] = [];
  constructor(private clientService: ClientsService){}

  ngOnInit(): void {
    this.clientService.GetAllClients()
    .subscribe({
      next: (client) => {
       this.client = client;
      },
      error: (response) => {
        console.log(this.client)
      }
    })
  }
}
