import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-lista-tarefas',
  imports: [FormsModule],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.scss'
})
export class ListaTarefas {
  pegarTarefa: string = "";
  data?: Date;
  tarefas: Array<string> = [];

  adicicionar(): void {
    if (this.pegarTarefa === "" || this.data === undefined) {
      alert("Preenchar os campos corretamente")
    } else {
      let tarefa = `${this.pegarTarefa} - ${this.data}`;
      this.tarefas.push(tarefa);
      this.pegarTarefa = "";
    }
  }
  apagar(tarefaParaApagar: string): void {
    let indiceParaApagar = this.tarefas.indexOf(tarefaParaApagar);
    this.tarefas.splice(indiceParaApagar, 1);
  }
}
