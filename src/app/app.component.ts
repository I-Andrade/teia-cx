import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbunsComponent } from './albuns/albuns.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DockModule } from 'primeng/dock';
import { MenuItem } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    AlbunsComponent,
    CommonModule,
    DockModule,
    ProgressSpinnerModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'teia-cx';
  items: MenuItem[] = [
    {
      label: 'Finder',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
    },
    {
      label: 'App Store',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
    },
    {
      label: 'Photos',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
    },
    {
      label: 'Trash',
      icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png',
    },
  ];
}
