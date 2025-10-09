import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CursoEditarRequest } from '../../../models/curso.dto';
import { CursoService } from '../../../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';

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
export class CursoEdit {
  id: number;
  form: CursoEditarRequest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router,
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

    this.form = {
      nome: "",
      sigla: ""
    }
    this.carregarCurso();
  }

  private carregarCurso() {
    this.cursoService.getById(this.id).subscribe({
      next: curso => {
        this.form.nome = curso.nome;
        this.form.sigla = curso.sigla;
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar a turma")
      }
    })
  }

  salvar() {
    this.cursoService.update(this.id, this.form).subscribe({
      next: resposta => this.router.navigate(["/cursos"]),
      error: erro => {
        console.error(erro);
        alert("Não foi possível atualizar o curso")
      }
    })
  }

}
