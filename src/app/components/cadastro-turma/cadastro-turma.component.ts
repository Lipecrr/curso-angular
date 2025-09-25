import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Turma {
  nome: string;
  sigla: string;
}

@Component({
  selector: 'app-cadastro-turma',
  imports: [FormsModule],
  templateUrl: './cadastro-turma.component.html',
  styleUrl: './cadastro-turma.component.scss'
})
export class CadastroTurma {
  turmas: Turma[];

  nomeTurma: string = "";
  sigla: string = "";

  constructor(private router: Router) {
    this.turmas = this.carregarTurmasLocalStorage();
  }

  salvar(): void {
    let turma: Turma = {
      nome: this.nomeTurma,
      sigla: this.sigla,
    }
    this.turmas.push(turma);
    this.salvarLocalStorage();
    this.router.navigate(["/lista-turmas"])
  }

  carregarTurmasLocalStorage(): Turma[] {
    let turmasDoLocalStorage = localStorage.getItem("turmas");
    if (turmasDoLocalStorage === null) {
      return [];
    }
    let turmas: Turma[] = JSON.parse(turmasDoLocalStorage);
    return turmas;
  }

  salvarLocalStorage(): void {
    let turmasString = JSON.stringify(this.turmas);

    localStorage.setItem("turmas", turmasString);
  }
}