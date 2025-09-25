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
}
