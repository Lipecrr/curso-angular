import { Component, Input } from '@angular/core';

type tipos = "aviso" | "padrao" | "perigo" | "sucesso";

@Component({
  selector: 'botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {
  @Input() texto: string = "";
  @Input() tipo: tipos = "padrao";
  
}
