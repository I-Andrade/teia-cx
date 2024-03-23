import { Component } from '@angular/core';
import { Foto } from '../models/foto';
import { AppService } from '../app.service';
import { Album } from '../models/album';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { AlbumComponent } from './album/album.component';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-albuns',
  standalone: true,
  imports: [
    GalleriaModule,
    ProgressSpinnerModule,
    PaginatorModule,
    ButtonModule,
    AlbumComponent,
    DividerModule,
  ],
  providers: [AppService],
  templateUrl: './albuns.component.html',
  styleUrl: './albuns.component.scss',
})
export class AlbunsComponent {
  public fotos: Foto[] = [];
  public albuns: Album[] = [];
  public albumAtivo?: Album;
  public carregando = true;
  displayCustom: boolean = false;

  activeIndex: number = 0;
  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.buscarFotos();
  }

  buscarFotos(): void {
    this.service.buscarFotos().subscribe((fotos: Foto[]) => {
      this.fotos = fotos;
      this.defineAlbuns();
      this.carregando = false;
    });
  }

  defineAlbuns(): void {
    var fotosAlbum: Foto[] = [];
    var fotosPaginadas: Foto[] = [];
    var totalFotos: number = 0;
    var albunsId = new Set(this.fotos.map((foto) => foto.albumId));
    albunsId.forEach((albumId) => {
      fotosAlbum = this.fotos.filter((foto) => foto.albumId === albumId);
      totalFotos = fotosAlbum.length;
      fotosPaginadas = fotosAlbum.slice(0, 9);
      // console.log(fotosPaginadas);
      this.albuns.push({
        id: albumId,
        nome: 'Album ' + albumId,
        capaUrl: fotosAlbum[1].thumbnailUrl,
        fotos: fotosAlbum,
        fotosPaginadas: fotosPaginadas,
        totalFotos: totalFotos,
      });
    });
    // console.log(albunsId, this.albuns);
  }

  imageClick(event: any) {
    this.activeIndex = event.index;
    this.displayCustom = true;
    this.albumAtivo = this.albuns.find((album) => album.id === event.albumId);
  }
}
