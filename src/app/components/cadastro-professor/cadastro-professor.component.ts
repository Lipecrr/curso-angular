import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Professor {
  nome: string;
  cpf: string;
  dataDeNascimento: Date;
  cnpj: string;
  pix: string;
  nomeFantasia: string;
  valorHora: number;
  celular: string;
  geracao: string;
}

@Component({
  selector: 'app-cadastro-professor',
  imports: [FormsModule],
  templateUrl: './cadastro-professor.component.html',
  styleUrl: './cadastro-professor.component.scss'
})
export class CadastroProfessor {
  professores: Professor[];

  nome: string = "";
  cpf: string = "";
  dataDeNascimento?: Date;
  cnpj: string = "";
  pix: string = "";
  nomeFantasia: string = "";
  valorHora?: number;
  celular: string = "";
  geracao: string = "";

  constructor(private router: Router) {
    this.professores = this.carregarProfessoresLocalStorage();
  }

  salvar(): void {
    let professor: Professor = {
      nome: this.nome,
      cpf: this.cpf,
      dataDeNascimento: this.dataDeNascimento!,
      cnpj: this.cnpj,
      pix: this.pix,
      nomeFantasia: this.nomeFantasia,
      valorHora: this.valorHora!,
      celular: this.celular,
      geracao: this.validarGeracao(this.dataDeNascimento!)
    }

    this.professores.push(professor);
    this.salvarLocalStorage();
    this.router.navigate(["/lista-professores"]);
  }

  salvarLocalStorage(): void {
    let professoresString = JSON.stringify(this.professores);

    localStorage.setItem("professores", professoresString);
  }

  carregarProfessoresLocalStorage(): Professor[] {
    let professoresDoLocalStorage = localStorage.getItem("professores");
    if (professoresDoLocalStorage === null) {
      return [];
    }

    let professores: Professor[] = JSON.parse(professoresDoLocalStorage);
    return professores;
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