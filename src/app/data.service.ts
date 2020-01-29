import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    console.log("CHAMOU O JSON");

   let  aniversariante = 
   [
    {"dia":10, "mes":1,"nome":"leonardo Alporges Martins"},
    {"dia":10, "mes":1,"nome":"José da Silva Teixeira"},
    {"dia":10, "mes":1,"nome":"Luiz  Carlos Garcia"},
    {"dia":15, "mes":1,"nome":"Maria Aparecida Vieira"},
    {"dia":15, "mes":1,"nome":"Josefa Elisa Ribeiro"},
    {"dia":24, "mes":1,"nome":"Mário Vicente Vinicius Assis"},
    {"dia":31, "mes":1,"nome":"leonardo Alporges Martins"},
    {"dia":31, "mes":1,"nome":"José da Silva Teixeira"},
    {"dia":31, "mes":1,"nome":"Luiz  Carlos Garcia"},
    {"dia":15, "mes":1,"nome":"Maria Aparecida Vieira"},
    {"dia":15, "mes":1,"nome":"Josefa Elisa Ribeiro"},
    {"dia":24, "mes":1,"nome":"Mário Vicente Vinicius Assis"},
    {"dia":24, "mes":2,"nome":"Mário Vicente Vinicius Assis"},
    {"dia":24, "mes":2,"nome":"Mário Vicente Vinicius Assis"},
    {"dia":24, "mes":2,"nome":"Mário Vicente Vinicius Assis"},
   
  ]
   return {aniversariante};

  }
}


/*
  {"dia":10, "mes":1,"nome":"leonardo Alporges Martins"},
     {"dia":10, "mes":1,"nome":"José da Silva Teixeira"},
     {"dia":10, "mes":1,"nome":"Luiz  Carlos Garcia"},
     {"dia":15, "mes":1,"nome":"Maria Aparecida Vieira"},
     {"dia":15, "mes":1,"nome":"Josefa Elisa Ribeiro"},
     {"dia":24, "mes":1,"nome":"Mário Vicente Vinicius Assis"},
     {"dia":10, "mes":2,"nome":"Tânia Manuela Sophia da Rosa"},
     {"dia":10, "mes":2,"nome":"Raquel Alessandra Rebeca Assis"},
     {"dia":10, "mes":2,"nome":"Thiago Enzo da Rosa"},
     {"dia":15, "mes":2,"nome":"Rayssa Antonella Juliana Barros"},
     {"dia":15, "mes":2,"nome":"Patrícia Amanda Raimunda da Luz"},
     {"dia":24, "mes":2,"nome":"Mateus Benedito Thomas Galvão"},
     {"dia":31, "mes":2,"nome":"Ryan Cauã Paulo da Silva"},
     {"dia":20, "mes":2,"nome":"Elza Carla Moura"},
     {"dia":30, "mes":3,"nome":"Carlos Eduardo Guilherme Barbosa"},
     {"dia":23, "mes":3,"nome":"Valentina Amanda Márcia Caldeira"},
     {"dia":5, "mes":3,"nome":"Gabriela Catarina Andrea Assunção"},
     {"dia":6, "mes":3,"nome":"Lívia Nina Mariana Lima"},
     {"dia":7, "mes":3,"nome":"Yuri Felipe Duarte"},
     {"dia":8, "mes":3,"nome":"Samuel Bruno da Costa"},
     {"dia":9, "mes":3,"nome":"Julio Matheus Baptista"},
     {"dia":11, "mes":3,"nome":"Rayssa Antonella Juliana Barros"},
     {"dia":13, "mes":4,"nome":"Patrícia Amanda Raimunda da Luz"},
     {"dia":14, "mes":4,"nome":"Mateus Benedito Thomas Galvão"},
     {"dia":15, "mes":4,"nome":"leonardo Alporges Martins"},
     {"dia":16, "mes":4,"nome":"José da Silva Teixeira"},
     {"dia":17, "mes":4,"nome":"Luiz  Carlos Garcia"},
     {"dia":18, "mes":4,"nome":"Maria Aparecida Vieira"},
     {"dia":19, "mes":4,"nome":"Josefa Elisa Ribeiro"},
     {"dia":20, "mes":6,"nome":"Mário Vicente Vinicius Assis"},
     {"dia":21, "mes":7,"nome":"Tânia Manuela Sophia da Rosa"},
     {"dia":22, "mes":8,"nome":"Raquel Alessandra Rebeca Assis"},
     {"dia":23, "mes":9,"nome":"Thiago Enzo da Rosa"},
     {"dia":24, "mes":25,"nome":"Rayssa Antonella Juliana Barros"},
     {"dia":27, "mes":11,"nome":"Patrícia Amanda Raimunda da Luz"},
     {"dia":28, "mes":12,"nome":"Mateus Benedito Thomas Galvão"},
     {"dia":29, "mes":1,"nome":"Ryan Cauã Paulo da Silva"},
     {"dia":30, "mes":2,"nome":"Elza Carla Moura"},
     {"dia":1, "mes":3,"nome":"Carlos Eduardo Guilherme Barbosa"},
     {"dia":2, "mes":4,"nome":"Valentina Amanda Márcia Caldeira"},
     {"dia":3, "mes":5,"nome":"Gabriela Catarina Andrea Assunção"},
     {"dia":4, "mes":6,"nome":"Lívia Nina Mariana Lima"},
     {"dia":5, "mes":7,"nome":"Yuri Felipe Duarte"},
     {"dia":6, "mes":8,"nome":"Samuel Bruno da Costa"},
     {"dia":8, "mes":9,"nome":"Julio Matheus Baptista"},
     {"dia":7, "mes":8,"nome":"Rayssa Antonella Juliana Barros"},
     {"dia":9, "mes":11,"nome":"Patrícia Amanda Raimunda da Luz"},
     {"dia":10, "mes":12,"nome":"Mateus Benedito Thomas Galvão"},
     {"dia":14, "mes":1,"nome":"leonardo Alporges Martins"},
     {"dia":11, "mes":2,"nome":"José da Silva Teixeira"},
     {"dia":12, "mes":3,"nome":"Luiz  Carlos Garcia"},
     {"dia":13, "mes":4,"nome":"Maria Aparecida Vieira"},
     {"dia":15, "mes":5,"nome":"Josefa Elisa Ribeiro"},
     {"dia":16, "mes":6,"nome":"Mário Vicente Vinicius Assis"},
     {"dia":1, "mes":7,"nome":"Tânia Manuela Sophia da Rosa"},
     {"dia":17, "mes":8,"nome":"Raquel Alessandra Rebeca Assis"},
     {"dia":18, "mes":9,"nome":"Thiago Enzo da Rosa"},
     {"dia":19, "mes":20,"nome":"Rayssa Antonella Juliana Barros"},
     {"dia":21, "mes":11,"nome":"Patrícia Amanda Raimunda da Luz"},
     {"dia":22, "mes":12,"nome":"Mateus Benedito Thomas Galvão"},
     {"dia":23, "mes":1,"nome":"Ryan Cauã Paulo da Silva"},
     {"dia":24, "mes":2,"nome":"Elza Carla Moura"},
     {"dia":25, "mes":3,"nome":"Carlos Eduardo Guilherme Barbosa"},
     {"dia":2, "mes":4,"nome":"Valentina Amanda Márcia Caldeira"},
     {"dia":26, "mes":5,"nome":"Gabriela Catarina Andrea Assunção"},
     {"dia":27, "mes":6,"nome":"Lívia Nina Mariana Lima"},
     {"dia":28, "mes":7,"nome":"Yuri Felipe Duarte"},
     {"dia":29, "mes":8,"nome":"Samuel Bruno da Costa"},
     {"dia":30, "mes":9,"nome":"Julio Matheus Baptista"},
     {"dia":1, "mes":2,"nome":"Rayssa Antonella Juliana Barros"},
     {"dia":3, "mes":11,"nome":"Patrícia Amanda Raimunda da Luz"},
     {"dia":4, "mes":12,"nome":"Mateus Benedito Thomas Galvão"},
     {"dia":5, "mes":1,"nome":"leonardo Alporges Martins"},
     {"dia":6, "mes":2,"nome":"José da Silva Teixeira"},
     {"dia":7, "mes":3,"nome":"Luiz  Carlos Garcia"},
     {"dia":78, "mes":4,"nome":"Maria Aparecida Vieira"},
     {"dia":8, "mes":5,"nome":"Josefa Elisa Ribeiro"},
     {"dia":9, "mes":6,"nome":"Mário Vicente Vinicius Assis"},
     {"dia":10, "mes":7,"nome":"Tânia Manuela Sophia da Rosa"},
     {"dia":11, "mes":8,"nome":"Raquel Alessandra Rebeca Assis"},
     {"dia":12, "mes":9,"nome":"Thiago Enzo da Rosa"},
     {"dia":13, "mes":14,"nome":"Rayssa Antonella Juliana Barros"},
     {"dia":1, "mes":11,"nome":"Patrícia Amanda Raimunda da Luz"},
     {"dia":15, "mes":12,"nome":"Mateus Benedito Thomas Galvão"},
     {"dia":16, "mes":1,"nome":"Ryan Cauã Paulo da Silva"},
     {"dia":17, "mes":2,"nome":"Elza Carla Moura"},
     {"dia":18, "mes":3,"nome":"Carlos Eduardo Guilherme Barbosa"},
     {"dia":19, "mes":4,"nome":"Valentina Amanda Márcia Caldeira"},
     {"dia":20, "mes":5,"nome":"Gabriela Catarina Andrea Assunção"},
     {"dia":21, "mes":6,"nome":"Lívia Nina Mariana Lima"},
     {"dia":22, "mes":7,"nome":"Yuri Felipe Duarte"},
     {"dia":10, "mes":8,"nome":"Samuel Bruno da Costa"},
     
*/