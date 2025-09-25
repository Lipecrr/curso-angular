import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Professor {
  nome: string;
  cpf: string;
  dataDeNascimento: Date;
  cnpj: string;
  pix: string;
  nomeFantasia: string;
  valorHora: number;
  celular: string;
}

@Component({
  selector: 'app-lista-professores',
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-professores.component.html',
  styleUrl: './lista-professores.component.scss'
})
export class ListaProfessores {
  professores: Professor[];

  constructor() {
    this.professores = this.carregarProfessoresLocalStorage();
  }

  carregarProfessoresLocalStorage(): Professor[] {
    let professoresDoLocalStorage = localStorage.getItem("professores");
    if (professoresDoLocalStorage === null) {
      return [];
    }

    let professores: Professor[] = JSON.parse(professoresDoLocalStorage);
    return professores;
  }

  apagar(professor: Professor): void {
    let indiceParaApagar = this.professores.indexOf(professor);
    this.professores.splice(indiceParaApagar, 1);
    this.salvarLocalStorage();
  }

  salvarLocalStorage(): void {
    let professoresString = JSON.stringify(this.professores);

    localStorage.setItem("professores", professoresString);
  }
}