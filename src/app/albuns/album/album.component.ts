import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Album } from '../../models/album';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, ButtonModule, PaginatorModule, DialogModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent {
  @Input() album?: Album;
  @Output() abriuFoto: EventEmitter<any> = new EventEmitter();

  // Paginação do álbum
  first: number = 0;
  rows: number = 9;
  loading = false;

  onPageChange(event: any) {
    this.loading = true;
    this.first = event.first;
    this.rows = event.rows;
    if (this.album)
      this.album.fotosPaginadas = this.album?.fotos.slice(
        this.first,
        this.first + this.rows
      );
    this.loading = false;
  }

  abrirFoto(index: number, albumId: number) {
    this.abriuFoto.emit({
      index: this.first + index,
      albumId: albumId,
    });
  }
}
