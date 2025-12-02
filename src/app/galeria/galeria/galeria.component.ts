import { LugaresService } from './../../lugares/lugares.service';
import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categorias } from '../../categorias/categorias';
import { CategoriasService } from '../../categorias/categorias.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})

export class GaleriaComponent implements OnInit{

  lugares: Lugar[] = [];
  categoriasFiltro: Categorias[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';


  constructor (
    private lugarService: LugaresService,
    private categoriaService: CategoriasService

  )
  {}


  ngOnInit(): void {
    this.categoriaService.obterTodas()
    .subscribe(categorias => this.categoriasFiltro = categorias);

    this.lugarService.obterTodos()
    .subscribe(lugaresResposta => this.lugares = lugaresResposta);
  }

  getTotalEstrelas(lugar: Lugar): string{

    const avaliacao = Number(lugar.avaliacao) || 0;

    const estrelasCheias = '&#9733;'.repeat(avaliacao);
    const estrelasVazias = '&#9734;'.repeat(5 - avaliacao);

    return estrelasCheias + estrelasVazias;

  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
      .subscribe(resultado => this.lugares = resultado);
  }
}
