import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { EmprestimoCadastroRequest, LivroResponse, UsuarioResponse } from '../../../models/emprestimo.dto';
import { EmprestimoService } from '../../../services/emprestimo.service';
import { Router } from '@angular/router';
import { CategoriaResponse } from '../../../models/categoria.dto';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';
import { Textarea } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { AutorResponse } from '../../../models/autor.dto';
import { UsuarioService } from '../../../services/usuario.service';
import { LivroService } from '../../../services/livro.service';

@Component({
  selector: 'app-create',
  imports: [
    FormsModule,
    InputTextModule,
    InputMaskModule,
    SelectModule,
    DatePickerModule,
    StepsModule,
    StepperModule,
    ToastModule,
    DatePickerModule,
    ButtonModule,
  ],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class EmprestimoCreate {
  form: EmprestimoCadastroRequest;
  titulo: string | null = null;

  livros: LivroResponse[] | undefined;
  autores: AutorResponse[] | undefined;
  usuarios: UsuarioResponse[] | undefined;



  constructor(
    private emprestimoService: EmprestimoService,
    private usuarioService: UsuarioService,
    private livroService: LivroService,
    private router: Router,
  ) {
    this.form = {
      livroId: 0,
      usuarioId: 0,
      dataEmprestimo: new Date(),
      dataDevolucao: new Date(),
      status: "",
    }
  }

  ngOnInit() {
    this.carregarUsuarios();
    this.carregarLivros();
  }


  salvar() {
    this.emprestimoService.create(this.form).subscribe({
      next: _ => this.router.navigate(["/emprestimos"]),
      error: erro => {
        alert("Não foi possível cadastrar o emprestimo");
        console.error(erro);
      }
    })
  }

  carregarUsuarios() {
    this.usuarioService.getAll().subscribe({
      next: usuarios => this.usuarios = usuarios,
      error: erro => {
        alert("Não foi possível carregar os usuarios");
        console.error("Ocorreu um erro ao carregar os usuarios: " + erro)
      }
    });
  }

  carregarLivros() {
    this.livroService.getAll(this.titulo).subscribe({
      next: livros => this.livros = livros,
      error: erro => {
        alert("Não foi possível carregar os livros");
        console.error("Ocorreu um erro ao carregar os livros: " + erro)
      }
    });
  }
}
