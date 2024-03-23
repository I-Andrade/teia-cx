import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbunsComponent } from './albuns/albuns.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    HomeComponent,
    AlbunsComponent,
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    ProgressSpinnerModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'teia-cx';
  mostrarGaleria = false;
}
