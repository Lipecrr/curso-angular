import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Materia {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-cadastro-materia',
  imports: [FormsModule],
  templateUrl: './cadastro-materia.component.html',
  styleUrl: './cadastro-materia.component.scss'
})
export class CadastroMateriaComponent {
  materias: Materia[];

  nome: string = "";

  idEditar?: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.materias = this.carregarMateriasLocalStorage();
    let idParaEditar = this.activatedRouter.snapshot.paramMap.get("id");

    if (idParaEditar !== null) {
      this.idEditar = idParaEditar.toString();

      this.preencherCamposParaEditar();
    }
  }
  preencherCamposParaEditar() {
    let materia = this.materias.filter(materia => materia.id === this.idEditar)[0];
    this.nome = materia.nome;
  }

  salvar(): void {
    if (this.idEditar === undefined) {
      this.cadastroMateria();
    } else {
      this.editarMateria();
    }
    this.salvarLocalStorage();
    this.router.navigate(["/lista-materias"]);
  }
  
  editarMateria() {
    let indiceLista = this.materias.findIndex(materia => materia.id === this.idEditar);
    
    this.materias[indiceLista].nome = this.nome;
  }

  cadastroMateria() {
    let materia: Materia = {
      id: crypto.randomUUID(),
      nome: this.nome,
    }

    this.materias.push(materia);
  }

  salvarLocalStorage(): void {
    let materiasString = JSON.stringify(this.materias);

    localStorage.setItem("materias", materiasString);
  }

  carregarMateriasLocalStorage(): Materia[] {
    let materiasDoLocalStorage = localStorage.getItem("materias");
    if (materiasDoLocalStorage === null) {
      return [];
    }

    let materias: Materia[] = JSON.parse(materiasDoLocalStorage);
    return materias;
  }
}
