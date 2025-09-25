import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Materia {
  nome: string;
}

@Component({
  selector: 'app-lista-materias',
  imports: [RouterLink],
  templateUrl: './lista-materias.component.html',
  styleUrl: './lista-materias.component.scss'
})
export class ListaMaterias {

  materias: Materia[];

  constructor() {
    this.materias = this.materias = this.carregarMateriasLocalStorage();
  }

  carregarMateriasLocalStorage(): Materia[] {
    let materiasDoLocalStorage = localStorage.getItem("materias");
    if (materiasDoLocalStorage === null) {
      return [];
    }

    let materias: Materia[] = JSON.parse(materiasDoLocalStorage);
    return materias;
  }

  apagar(materia: Materia): void {
    let indiceParaApagar = this.materias.indexOf(materia);
    this.materias.splice(indiceParaApagar, 1);
    this.salvarLocalStorage();
  }

  salvarLocalStorage(): void {
    let materiasString = JSON.stringify(this.materias);

    localStorage.setItem("materias", materiasString);
  }
}
