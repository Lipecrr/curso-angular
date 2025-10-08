import { Component } from '@angular/core';
import { AlunoResponse } from '../../../models/aluno.dto';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AlunoService } from '../../../services/aluno.service';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [TableModule, CommonModule, ButtonModule, RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class AlunoList {
  alunos: AlunoResponse[] = [];

  constructor(private alunoService: AlunoService) {
  }

  ngOnInit() {
    this.carregarAlunos();
  }

  private carregarAlunos() {
    this.alunoService.getAll().subscribe({
      next: alunos => this.alunos = alunos,
      error: erro => {
        alert("Não foi possível carregar os alunos");
        console.error("Ocorreu um erro ao carregar os alunos: " + erro)
      }
    });
  }

  apagar(id: number) {
    this.alunoService.delete(id).subscribe({
      next: _ => this.carregarAlunos(),
      error: erro => {
        alert("Não foi possível apagar o aluno")
        console.error("Ocorreu um erro ao apagar o aluno: " + erro)
      }
    })
  }
}
