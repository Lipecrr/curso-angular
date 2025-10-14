import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { UsuarioCadastroRequest, UsuarioResponse } from '../../../models/usuario.dto';
import { EmprestimoService } from '../../../services/emprestimo.service';
import { EmprestimoEditarRequest, LivroResponse } from '../../../models/emprestimo.dto';
import { AutorResponse } from '../../../models/autor.dto';
import { LivroService } from '../../../services/livro.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-edit',
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
  ], templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class EmprestimoEdit {
  id: number;
  form: EmprestimoEditarRequest;

  titulo: string | null = null;

  livros: LivroResponse[] | undefined;
  autores: AutorResponse[] | undefined;
  usuarios: UsuarioResponse[] | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private livroService: LivroService,
    private activatedRoute: ActivatedRoute,
    private emprestimoService: EmprestimoService,
    private router: Router,
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

    this.form = {
      livroId: 0,
      usuarioId: 0,
      dataEmprestimo: new Date(),
      dataDevolucao: new Date(),
      status: "",
    }
    this.carregarEmprestimo();
  }

  ngOnInit() {
    this.carregarUsuarios();
    this.carregarLivros();
  }

  private carregarEmprestimo() {
    this.emprestimoService.getById(this.id).subscribe({
      next: emprestimo => {
        this.form.livroId = emprestimo.livroId;
        this.form.usuarioId = emprestimo.usuarioId;
        this.form.dataEmprestimo = emprestimo.dataEmprestimo;
        this.form.dataDevolucao = emprestimo.dataDevolucao;
        this.form.status = emprestimo.status;
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar o emprestimo")
      }
    })
  }

  salvar() {
    this.emprestimoService.update(this.id, this.form).subscribe({
      next: resposta => this.router.navigate(["/emprestimos"]),
      error: erro => {
        console.error(erro);
        alert("Não foi possível atualizar o usuario")
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