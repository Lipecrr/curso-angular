import { Component } from '@angular/core';
import { CursoResponse } from '../../../models/curso.dto';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CursoService } from '../../../services/curso.service';
import { Button, ButtonModule } from "primeng/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [TableModule, CommonModule, ButtonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class CursoList {
  cursos: CursoResponse[] = [];

  constructor(private cursoService: CursoService) {
  }

  ngOnInit() {
    this.carregarCursos();
  }
  carregarCursos() {
    this.cursoService.getAll().subscribe({
      next: cursos => this.cursos = cursos,
      error: erro => {
        alert("Não foi possível carregar os cursos");
        console.error("Ocorreu um erro ao carregar os cursos: " + erro)
      }
    });
  }

  apagar(id: number) {
    this.cursoService.delete(id).subscribe({
      next: _ => this.carregarCursos(),
      error: erro => {
        alert("Não foi possível apagar a autor")
        console.error("Ocorreu um erro ao apagar as autor: " + erro)
      }
    })
  }
}
