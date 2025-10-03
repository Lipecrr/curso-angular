import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CategoriaResponse } from '../../../models/categoria.dto';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'categoria-list',
  imports: [ButtonModule, TableModule, CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class CategoriaList {
  categorias: CategoriaResponse[] = [];

  constructor(private categoriaService: CategoriaService){
  }

  ngOnInit(){
    this.categoriaService.getAll().subscribe({
      next: categorias => this.categorias = categorias,
      error: erro => alert("Não foi possível carregar as categorias")
    })
  }
}
