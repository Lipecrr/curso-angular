import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Professor {
  id: string;
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

  idEditar?: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.professores = this.carregarProfessoresLocalStorage();
    let idParaEditar = this.activatedRouter.snapshot.paramMap.get("id");
    
    if (idParaEditar !== null) {
      this.idEditar = idParaEditar.toString();

      this.preencherCamposParaEditar();
    }
  }

  preencherCamposParaEditar() {
    let professor = this.professores.filter(professor => professor.id === this.idEditar)[0];
    this.nome = professor.nome;
    this.cpf = professor.cpf;
    this.dataDeNascimento = professor.dataDeNascimento;
    this.cnpj = professor.cnpj;
    this.pix = professor.pix;
    this.nomeFantasia = professor.nomeFantasia;
    this.valorHora = professor.valorHora;
    this.celular = professor.celular;
  }

  salvar(): void {
    if (this.idEditar === undefined) {
      this.cadastrarProfessor();
    } else {
      this.editarProfessor();
    }
    
    this.salvarLocalStorage();
    this.router.navigate(["/lista-professores"]);
  }

  editarProfessor(): void {
    let indiceLista = this.professores.findIndex(professor => professor.id === this.idEditar);

    this.professores[indiceLista].nome = this.nome;
    this.professores[indiceLista].cpf = this.cpf;
    this.professores[indiceLista].dataDeNascimento = this.dataDeNascimento!;
    this.professores[indiceLista].cnpj = this.cnpj;
    this.professores[indiceLista].pix = this.pix;
    this.professores[indiceLista].nomeFantasia = this.nomeFantasia;
    this.professores[indiceLista].valorHora = this.valorHora!;
    this.professores[indiceLista].celular = this.celular;
  }

  cadastrarProfessor(): void {
    let professor: Professor = {
      id: crypto.randomUUID(),  
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