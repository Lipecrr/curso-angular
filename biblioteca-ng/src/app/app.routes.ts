import { Routes } from '@angular/router';
import { CategoriaList } from './pages/categorias/list/list';
import { CategoriaCreate } from './pages/categorias/create/create';
import { CategoriaEdit } from './pages/categorias/edit/edit';
import { AutorList } from './pages/autores/list/list';
import { AutorCreate } from './pages/autores/create/create';
import { AutorEdit } from './pages/autores/edit/edit';
import { AlunoList } from './pages/alunos/list/list';
import { AlunoCreate } from './pages/alunos/create/create';
import { AlunoEdit } from './pages/alunos/edit/edit';

export const routes: Routes = [
    { path: "categorias", component: CategoriaList },
    { path: "categorias/cadastrar", component: CategoriaCreate },
    { path: "categorias/editar/:id", component: CategoriaEdit },

    { path: "autores", component: AutorList },
    { path: "autores/cadastrar", component: AutorCreate },
    { path: "autores/editar/:id", component: AutorEdit },
    
    { path: "alunos", component: AlunoList },
    { path: "alunos/cadastrar", component: AlunoCreate },
    { path: "alunos/editar/:id", component: AlunoEdit },

    
];
