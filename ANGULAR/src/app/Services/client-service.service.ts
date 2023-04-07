import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Client } from '../Models/Client.Models';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor( private http: HttpClient ) { }

  GetAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseApiUrl + '/api/Clients')
  }

  addClient(addClientRequest: Client): Observable<Client> {
    return this.http.post<Client>(this.baseApiUrl + '/api/Clients', addClientRequest);
  }


  getClient(clientId: number): Observable<Client> {
    return this.http.get<Client>(this.baseApiUrl + '/api/Clients/' + clientId);
  }

  updateClient(clientId: number, updateClientRequest: Client): Observable<Client>{
    return this.http.put<Client>(this.baseApiUrl + '/api/Clients/' + clientId, updateClientRequest);
  }

  deleteClient(clientId: number): Observable<Client>{
    return this.http.delete<Client>(this.baseApiUrl + '/api/Clients/' + clientId); 
  }
}
  