import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-retangulo',
  imports: [FormsModule],
  templateUrl: './calculadora-retangulo.html',
  styleUrl: './calculadora-retangulo.scss'
})
export class CalculadoraRetangulo {
  base?: number;
  altura?: number;

  calcular(): void{
    let area = this.base! * this.altura!;
    alert(`Área do retângulo: ${area}cm²`)
  }
}
