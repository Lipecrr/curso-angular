import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {
  numero1?: number;
  numero2?: number;
  // void quer dizer que é uma função que não tem retorno
  somar(): void{
    let soma: number = this.numero1! + this.numero2!;
    alert(`Soma: ${soma}`);
  }
}
