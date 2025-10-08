import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { AlunoEditarRequest } from '../../../models/aluno.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from '../../../services/autor.service';
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-edit',
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class AlunoEdit {
  id: number;
  form: AlunoEditarRequest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunoService: AlunoService,
    private router: Router,
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

    this.form = {
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      cpf: ""
    }
    this.carregarAluno();
  }
  private carregarAluno() {
    this.alunoService.getById(this.id).subscribe({
      next: aluno => {
        this.form.nome = aluno.nome;
        this.form.sobrenome = aluno.sobrenome;
        this.form.cpf = aluno.cpf;
        this.form.dataNascimento = new Date(aluno.dataNascimento).toLocaleDateString('pt-BR');
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar o aluno")
      }
    })
  }

  salvar() {
    this.alunoService.update(this.id, this.form).subscribe({
      next: resposta => this.router.navigate(["/alunos"]),
      error: erro => {
        console.error(erro);
        alert("Não foi possível atualizar a autor")
      }
    })
  }
}
