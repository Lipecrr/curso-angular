import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Turma {
  id: string;
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

  nome: string = "";
  sigla: string = "";

  idEditar?: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.turmas = this.carregarTurmasLocalStorage();
    let idParaEditar = this.activatedRouter.snapshot.paramMap.get("id");

    if (idParaEditar !== null) {
      this.idEditar = idParaEditar.toString();
      this.preencherCamposParaEditar();
    }
  }
  preencherCamposParaEditar(): void {
    let turma = this.turmas.filter(turma => turma.id === this.idEditar)[0];
    this.nome = turma.nome;
    this.sigla = turma.sigla;
  }

  salvar(): void {
    if (this.idEditar === undefined) {
      this.cadastroTurma();
    } else {
      this.editarTurma();
    }
    this.salvarLocalStorage();
    this.router.navigate(["/lista-turmas"])
  }
  
  editarTurma() {
    let indiceLista = this.turmas.findIndex(turma => turma.id === this.idEditar);

    this.turmas[indiceLista].nome = this.nome;
    this.turmas[indiceLista].sigla = this.sigla;
  }

  cadastroTurma() {
    let turma: Turma = {
      id: crypto.randomUUID(),
      nome: this.nome,
      sigla: this.sigla,
    }
    this.turmas.push(turma);
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