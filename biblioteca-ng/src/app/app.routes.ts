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
import { CursoList } from './pages/cursos/list/list';
import { CursoCreate } from './pages/cursos/create/create';
import { CursoEdit } from './pages/cursos/edit/edit';
import { LivroList } from './pages/livros/list';
import { LivroCreate } from './pages/livros/create';
import { UsuarioList } from './pages/usuarios/list/list';
import { UsuarioCreate } from './pages/usuarios/create/create';
import { EmprestimoList } from './pages/emprestimos/list/list';
import { EmprestimoCreate } from './pages/emprestimos/create/create';
import { UsuarioEdit } from './pages/usuarios/edit/edit';
import { EmprestimoEdit } from './pages/emprestimos/edit/edit';

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

    { path: "cursos", component: CursoList },
    { path: "cursos/cadastrar", component: CursoCreate },
    { path: "cursos/editar/:id", component: CursoEdit },

    { path: "livros", component: LivroList },
    { path: "livros/cadastrar", component: LivroCreate },

    { path: "usuarios", component: UsuarioList },
    { path: "usuarios/cadastrar", component: UsuarioCreate },
    { path: "usuarios/editar/:id", component: UsuarioEdit },
    

    { path: "emprestimos", component: EmprestimoList },
    { path: "emprestimos/cadastrar", component: EmprestimoCreate },
    { path: "emprestimos/editar/:id", component: EmprestimoEdit },
    
];
