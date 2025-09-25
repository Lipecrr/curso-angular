import { TmplAstUnknownBlock } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Turma {
  nome: string;
  sigla: string;
}


@Component({
  selector: 'app-lista-turmas',
  imports: [RouterLink],
  templateUrl: './lista-turmas.component.html',
  styleUrl: './lista-turmas.component.scss'
})
export class ListaTurmas {
  turmas: Turma[];

  constructor(private router: Router) {
    this.turmas = this.carregarTurmasLocalStorage();
  }

  carregarTurmasLocalStorage(): Turma[] {
    let turmasDoLocalStorage = localStorage.getItem("turmas");
    if (turmasDoLocalStorage === null) {
      return [];
    }
    let turmas: Turma[] = JSON.parse(turmasDoLocalStorage);
    return turmas;
  }

  apagar(turma: Turma): void {
    let indiceParaApagar = this.turmas.indexOf(turma);
    this.turmas.splice(indiceParaApagar, 1);
    this.salvarLocalStorage();
  }

  salvarLocalStorage(): void {
    let turmasString = JSON.stringify(this.turmas);

    localStorage.setItem("turmas", turmasString);
  }
}
