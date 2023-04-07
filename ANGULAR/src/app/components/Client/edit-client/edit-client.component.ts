import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Models/Client.Models';
import { ClientsService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {


  clientDetails: Client = {
    clientId: 0,
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    email: ''
     

  }
  constructor(private route: ActivatedRoute, private clientService: ClientsService, private router: Router){ }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe({
      next: (params)=>{
        const clientId = params.get('id');
        console.log(clientId);
        
        if(clientId){
          this.clientService.getClient(+clientId)
          .subscribe({
            next: (response)=>{
              this.clientDetails = response;
            }
          })
        }
      }
    })
  }

  updateClient(){
      this.clientService.updateClient(this.clientDetails.clientId, this.clientDetails)
      .subscribe({
        next: (response)=>{
          this.router.navigate(['Client'])
        }
      });
  }

  deleteClient(){
    this.clientService.deleteClient(this.clientDetails.clientId)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['Client']);
      }
    })
  }
}
  