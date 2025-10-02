import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'navbar',
  imports: [Menubar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Inicio',
              icon: 'pi pi-cog',
              routerLink: "/"
          },
          {
              label: 'Cadastros',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Autores',
                      icon: 'pi pi-users'
                    },
                    {
                        label: 'Categorias',
                        icon: 'pi pi-list',
                        routerLink: "categorias"
                    },
                    {
                        label: 'Livros',
                        icon: 'pi pi-book'
                    },
                    {
                          label: 'Usuários',
                          icon: 'pi pi-user'
                        },
              ]
          },
      ]
  }
}
