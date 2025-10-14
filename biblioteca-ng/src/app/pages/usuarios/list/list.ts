import { Component } from '@angular/core';
import { UsuarioResponse } from '../../../models/usuario.dto';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class UsuarioList {
  usuarios: UsuarioResponse[] = [];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.carregarUsuarios();
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

  apagar(id: number) {
    this.usuarioService.delete(id).subscribe({
        next: _ => this.carregarUsuarios(),
        error: erro => {
            alert("Não foi possível apagar o usuario")
            console.error("Ocorreu um erro ao apagar o usuario: " + erro)
        }
    })
}
}
