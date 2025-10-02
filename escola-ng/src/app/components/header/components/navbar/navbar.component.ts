import { Component, Input } from '@angular/core';
import { RouterLink, } from '@angular/router';

export interface NavbarMenu {
  link: string;
  titulo: string;
}
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // Input => Entrada
  // Output => Saída
 @Input() menus: NavbarMenu[] = [];



}
