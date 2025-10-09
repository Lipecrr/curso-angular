import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CursoCadastroRequest } from '../../../models/curso.dto';
import { Router } from '@angular/router';
import { CursoService } from '../../../services/curso.service';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-create',
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
  ],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class CursoCreate {
  form: CursoCadastroRequest;

  constructor(
    private cursoService: CursoService,
    private router: Router,
  ) {
    this.form = {
      nome: "",
      sigla: "",
    };
  }

  salvar() {
    this.cursoService.create(this.form).subscribe({
      next: _ => this.router.navigate(["/cursos"]),
      error: erro => {
        alert("Não foi possível cadastrar o curso");
        console.error(erro);
      }
    })
  }
}
