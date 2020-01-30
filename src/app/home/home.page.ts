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
  mes : string ;
  dia: number[] = [];

  constructor(private CalendarioService: CalendarioService) { }

  ngOnInit() {
    this.CalendarioService.getAniversariantes().subscribe((data : any[])=>{
    this.Aniversarios = data;
    this.mes =  String(this.Atual.getMonth() +1);
    this.filtradias();
    
    });
  }

  filtradias(){
    this.dia = this.Aniversarios.reduce((array,aniversariante) => { 
      if(this.mes == aniversariante.mes && array.indexOf(aniversariante.dia) < 0 ){
        array.push(aniversariante.dia);
      }
    return array;
    },[])
  }

  enviarValor(event){
    var controlador = event.detail.value;
    this.mes = controlador.substr(6,7);
    this.mes = this.mes.substr(0,1);
    this.filtradias();
  }
  
}
