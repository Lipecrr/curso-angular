import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Materia {
  id: string;
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

  constructor(private router: Router) {
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

  editar(materia: Materia): void {
    this.router.navigate([`/materias/editar/${materia.id}`])
  }

  salvarLocalStorage(): void {
    let materiasString = JSON.stringify(this.materias);

    localStorage.setItem("materias", materiasString);
  }
}
