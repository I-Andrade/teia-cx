import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Album } from '../../models/album';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, ButtonModule, PaginatorModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss',
})
export class AlbumComponent {
  @Input() album?: Album;
  @Output() abriuFoto: EventEmitter<any> = new EventEmitter();

  abrirFoto(index: number, albumId: number) {
    this.abriuFoto.emit({
      index: index,
      albumId: albumId,
    });
  }

  first1: number = 0;

  rows1: number = 10;
  totalRecords: number = 120;

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 },
  ];

  onPageChange1(event: any) {
    console.log(event);
    this.first1 = event.first;
    this.rows1 = event.rows;
  }
}
