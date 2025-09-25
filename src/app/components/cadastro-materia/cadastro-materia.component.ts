import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Materia {
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

  constructor(private router: Router) {
    this.materias = this.carregarMateriasLocalStorage();
  }

  salvar(): void {
    let materia: Materia = {
      nome: this.nome
    }

    this.materias.push(materia);
    this.salvarLocalStorage();
    this.router.navigate(["/lista-materias"]);
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
