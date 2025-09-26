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
  geracao: string = "";
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

validarGeracao(dataDeNascimento: Date): string {  
  let ano = new Date(dataDeNascimento).getFullYear();
  if (ano >= 1928 && ano <= 1945) {
    return "Geração Silenciosa";
  } else if (ano >= 1946 && ano <= 1964) {
    return "Baby Boomers";
  } else if (ano >= 1965 && ano <= 1980) {
    return "Geração X";
  } else if (ano >= 1981 && ano <= 1996) {
    return "Millennials";
  } else if (ano >= 1997 && ano <= 2012) {
    return "Geração Z";
  } else if (ano >= 2013 && ano <= 2025) {
    return "Geração Alpha";
  } else {
    return "Não definida";
  }
}
}