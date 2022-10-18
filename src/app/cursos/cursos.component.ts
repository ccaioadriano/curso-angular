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

  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'http://caio.training';
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
