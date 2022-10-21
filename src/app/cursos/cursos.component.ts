import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
  
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos:string[] = [];

  valueKey: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  //----------------
  url:string = 'http://caio-adriano.com';
  cursoAngular: boolean = true;
  urlImg = 'http://lorempixel.com/400/200/nature/';
  
  getValor(){
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
  teste(){
    console.log('testee>>>>>');
  }

  setValueKey(evento: KeyboardEvent){
    this.valueKey = (<HTMLInputElement>evento.target).value;
  }

  getValorInput(){
    return this.valueKey;
  }


  isMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  getValorSalvo(){
    return this.valorSalvo;
  }
 
  salvarValor(valor: any) {
    this.valorSalvo = (<HTMLInputElement>valor.target).value;
  }


  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://caio.training';
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
