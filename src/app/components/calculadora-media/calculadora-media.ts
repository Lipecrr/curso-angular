import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-media',
  imports: [FormsModule ],
  templateUrl: './calculadora-media.html',
  styleUrl: './calculadora-media.scss'
})
export class CalculadoraMedia {
nota1: number = 0;
nota2: number = 0;
nota3: number = 0;

calcular(): void{
  let media = (this.nota1 + this.nota2 + this.nota3) / 3;
  if (media >= 7){
    alert(`Aluno aprovado
Media: ${media.toFixed(2)}.`)
  } else {
        alert(`Aluno reprovado
Media: ${media.toFixed(2)}.`)
  }
}
}
