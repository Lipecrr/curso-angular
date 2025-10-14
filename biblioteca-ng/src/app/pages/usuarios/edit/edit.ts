import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMask } from 'primeng/inputmask';
import { UsuarioService } from '../../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioEditarRequest } from '../../../models/usuario.dto';

@Component({
  selector: 'app-edit',
  imports: [
    FormsModule,
    ButtonModule,
    InputMask,],
  templateUrl: './edit.html',
  styleUrl: './edit.scss'
})
export class UsuarioEdit {
  id: number;
  form: UsuarioEditarRequest;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id")!.toString());

    this.form = {
      nome: "",
      email: "",
      telefone: "",
      endereco: ""
    }
    this.carregarUsuario();
  }
  private carregarUsuario() {
    this.usuarioService.getById(this.id).subscribe({
      next: usuario => {
        this.form.nome = usuario.nome;
        this.form.email = usuario.email;
        this.form.telefone = usuario.telefone;
        this.form.endereco = usuario.endereco;
      },
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar o usuario")
      }
    })
  }

  salvar() {
    this.usuarioService.update(this.id, this.form).subscribe({
      next: resposta => this.router.navigate(["/usuarios"]),
      error: erro => {
        console.error(erro);
        alert("Não foi possível atualizar o usuario")
      }
    })
  }
}
