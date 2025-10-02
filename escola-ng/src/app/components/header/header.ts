import { Component } from '@angular/core';
import { NavbarComponent, NavbarMenu } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [NavbarComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menus: NavbarMenu[];

  constructor() {
    this.menus = [
      { link: "calculadora", titulo: "Calculadora" },
      { link: "lista-pessoas", titulo: "Lista de pessoas" },
      { link: "calculadora-retangulo", titulo: "Calculadora retangulo" },
      { link: "calculadora-media", titulo: "Calculadora média" },
      { link: "calculadora-temperatura", titulo: "Calculadora temperatura" },
      { link: "lista-tarefas", titulo: "Lista de tarefas" },
      { link: "lista-alunos", titulo: "Lista de alunos" },
      { link: "lista-turmas", titulo: "Lista de turmas" },
      { link: "lista-materias", titulo: "Lista de materias" },
      { link: "lista-professores", titulo: "Lista de professores" },
    ]
  }
}
