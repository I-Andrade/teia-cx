import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DockModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Output() mostrarGaleria: EventEmitter<any> = new EventEmitter();

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
      command: () => {
        this.mostrarGaleria.emit(false);
      },
    },
    {
      label: 'Fotos',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
      command: () => {
        this.mostrarGaleria.emit(true);
      },
    },
    {
      label: 'GitHub',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/github.svg',
      command: () => {
        window.open('https://github.com/I-Andrade/teia-cx', '_blank');
      },
    },
  ];
}
