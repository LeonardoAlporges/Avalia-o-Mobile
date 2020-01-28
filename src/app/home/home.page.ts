import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../calendario.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  Atual: Date = new Date();
  Aniversarios: any[] = [];
  mes : string;
  nome: string;
  isHidden: boolean = true;

  constructor(private CalendarioService: CalendarioService) { }

  ngOnInit() {
    
  }

  BuscarData(){
    this.CalendarioService.getAniversariantes().subscribe((data : any[])=>{
      this.Aniversarios = data;
      console.log(this.Aniversarios);
  })
  }

  enviarValor(event){
    var controlador = event.detail.value;
    this.mes = controlador.substr(6,7);
    this.mes = this.mes.substr(0,1);
    this.BuscarData(); 
  }

  enviarNome(event){
    this.nome = event.detail.value;
    this.BuscarData();
  }


}