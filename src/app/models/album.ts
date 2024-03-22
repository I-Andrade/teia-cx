import { Foto } from './foto';

export interface Album {
  id: number;
  nome: string;
  capaUrl: string;
  fotos: Foto[];
  fotosPaginadas: Foto[];
  totalFotos: number;
}
