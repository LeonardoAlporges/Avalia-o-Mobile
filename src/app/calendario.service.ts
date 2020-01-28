import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CalendarioService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getAniversariantes(){ 
       return this.httpClient.get(this.SERVER_URL + 'aniversariante');
  }

  public getAniversariante(mes){
       return this.httpClient.get(`${this.SERVER_URL + 'aniversariante'}/${mes}`); 
  }
  
}