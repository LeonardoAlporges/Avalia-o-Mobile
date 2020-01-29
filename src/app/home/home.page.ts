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
  dia: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,22,23,24,25,26,27,29,29,30];

  MesmoDia: any[] = [];


  constructor(private CalendarioService: CalendarioService) { }

  ngOnInit() {
    this.CalendarioService.getAniversariantes().subscribe((data : any[])=>{
    this.Aniversarios = data;
    console.log(this.Aniversarios);
  });
  }

  teste(test){
    var position = 0;
    var j = 0;

    for (var i=0; i <= this.Aniversarios.length; i++)
    {
      var controlador = this.Aniversarios[i].dia; 
      if( controlador == test.dia)
      {
          this.MesmoDia[j] =this.Aniversarios[i] ;
          position++;
          j++;
      }
    }
  }





  enviarValor(event){
    var controlador = event.detail.value;
    this.mes = controlador.substr(6,7);
    this.mes = this.mes.substr(0,1);
  }

  enviarNome(event){
    this.nome = event.detail.value;

  }
  semnome(test){

  }

}
