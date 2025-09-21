import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-temperatura',
  imports: [FormsModule ],
  templateUrl: './calculadora-temperatura.html',
  styleUrl: './calculadora-temperatura.scss'
})
export class CalculadoraTemperatura {
valor: number = 0;
resultado?: number;

kelvinParaFahrenheit(): void{
this.resultado = (this.valor - 273.15) * 9/5 + 32;
alert(`Kelvin → Fahrenheit: ${this.resultado.toFixed(2)}`);
}

fahrenheitParaKelvin(): void{
  this.resultado = (this.valor - 32) * 5/9 + 273.15;
  alert(`Fahrenheit → Kelvin: ${this.resultado.toFixed(2)}`);
}

kelvinParaCelsius(): void{
  this.resultado = this.valor - 273.15;
  alert(`Kelvin → Celsius: ${this.resultado.toFixed(2)}`);
}

celsiusParaKelvin(): void{
  this.resultado = this.valor + 273.15;
  alert(`Celsius → Kelvin: ${this.resultado.toFixed(2)}`);
}

fahrenheitParaCelsius(): void{
  this.resultado = (this.valor - 32) * 5/9;
  alert(`Fahrenheit → Celsius: ${this.resultado.toFixed(2)}`);
}

celsiusParaFahrenheit(): void{
  this.resultado = (this.valor * 9/5) + 32;
  alert(`Celsius → Fahrenheit: ${this.resultado.toFixed(2)}`);
}
}
