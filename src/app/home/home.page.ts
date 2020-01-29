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
  dia: number[] = [];

  MesmoDia: any[] = [];


  constructor(private CalendarioService: CalendarioService) { }

  ngOnInit() {
    this.CalendarioService.getAniversariantes().subscribe((data : any[])=>{
    this.Aniversarios = data;
    this.filtradias();

    console.log(this.Aniversarios);
  });
  }

  BuscaDoDia(Person){
    var position = 0;
    var j = 0;

    for (var i=0; i <= this.Aniversarios.length; i++)
    {
      var controlador = this.Aniversarios[i].dia; 
      if( controlador == Person.dia)
      {
          this.MesmoDia[j] =this.Aniversarios[i] ;
          position++;
          j++;
      }
    }
  }

  filtradias(){
    this.dia = this.Aniversarios.reduce((array,aniversariante) => { 
        if(this.mes == aniversariante.mes && array.indexOf(aniversariante.dia) < 0 ){
          array.push(aniversariante.dia);
        }
      return array;
    },[])

    console.log(this.dia);
    }




  enviarValor(event){
    var controlador = event.detail.value;
    this.mes = controlador.substr(6,7);
    this.mes = this.mes.substr(0,1);
    this.filtradias();
  }

  enviarNome(event){
    this.nome = event.detail.value;

  }
  semnome(test){

  }

}
