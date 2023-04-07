import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/Client.Models';
import { ClientsService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit{


  addClientRequest: Client = {
    clientId: 0,
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    email: ''
   


  };

  constructor(private clientService: ClientsService, private router: Router){

  }

  ngOnInit(): void {
  }

  addClient(){
    console.log("helloooo this is submit");
    
    this.clientService.addClient(this.addClientRequest)
    .subscribe({
      next: (client)=>{
        this.router.navigate(['Client'])
      }
    })
  }
}
