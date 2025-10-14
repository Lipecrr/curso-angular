import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { UsuarioCadastroRequest } from '../../../models/usuario.dto';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { InputMask } from 'primeng/inputmask';

@Component({
  selector: 'app-create',
  imports: [
    FormsModule,
    ButtonModule,
    InputMask,],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class UsuarioCreate {
  form: UsuarioCadastroRequest;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {
    this.form = {
      nome: "",
      email: "",
      telefone: "",
      endereco: ""
    }
  }

  salvar() {
    this.usuarioService.create(this.form).subscribe({
      next: _ => this.router.navigate(["/usuarios"]),
      error: erro => {
          alert("Não foi possível cadastrar o usuarios");
          console.error(erro);
      } 
  })
  }
}
