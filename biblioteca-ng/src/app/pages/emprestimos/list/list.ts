import { Component } from '@angular/core';
import { EmprestimoResponse } from '../../../models/emprestimo.dto';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { EmprestimoService } from '../../../services/emprestimo.service';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    RouterLink,
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class EmprestimoList {
  emprestimos: EmprestimoResponse[] = [];

  constructor(private emprestimoService: EmprestimoService) {
  }

  ngOnInit() {
    this.carregarEmprestimos();
  }

  carregarEmprestimos() {
    this.emprestimoService.getAll().subscribe({
      next: emprestimos => this.emprestimos = emprestimos,
      error: erro => {
        alert("Não foi possível carregar os emprestimos");
        console.error("Ocorreu um erro ao carregar os emprestimos: " + erro)
      }
    });
  }

  apagar(id: number) {
    this.emprestimoService.delete(id).subscribe({
      next: _ => this.carregarEmprestimos(),
      error: erro => {
        alert("Não foi possível apagar o emprestimo")
        console.error("Ocorreu um erro ao apagar o emprestimo: " + erro)
      }
    })
  }

  validarStatus(emprestimo: EmprestimoResponse): void {
    const hoje = new Date();
    const dataDevolucao? = emprestimo.dataDevolucao;

    if (hoje > dataDevolucao!) {

    }

  }

}
