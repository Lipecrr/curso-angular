import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { ListaPessoas } from './components/lista-pessoas/lista-pessoas';
import { CalculadoraRetangulo } from './components/calculadora-retangulo/calculadora-retangulo';
import { CalculadoraMedia } from './components/calculadora-media/calculadora-media';
import { CalculadoraTemperatura } from './components/calculadora-temperatura/calculadora-temperatura';
import { ListaTarefas } from './components/lista-tarefas/lista-tarefas';
import { ListaAlunos } from './components/lista-alunos/lista-alunos';
import { CadastroAluno } from './components/cadastro-aluno/cadastro-aluno';
//SPA: Single Page Aplication
export const routes: Routes = [
    {path: "calculadora", component: Calculadora},
    {path: "lista-pessoas", component: ListaPessoas},
    {path: "calculadora-retangulo", component: CalculadoraRetangulo},
    {path: "calculadora-media", component: CalculadoraMedia},
    {path: "calculadora-temperatura", component: CalculadoraTemperatura},
    {path: "lista-tarefas", component: ListaTarefas},
    {path: "lista-alunos", component: ListaAlunos},
    {path: "cadastro-aluno", component: CadastroAluno}
];
