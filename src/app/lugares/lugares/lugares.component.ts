import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categorias} from '../../categorias/categorias';
import { CategoriasService } from '../../categorias/categorias.service';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-lugares',
  standalone: false,
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.scss'
})
export class LugaresComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categorias[] = [];

  constructor(
    private categoriaService: CategoriasService,
    private lugarService: LugaresService
  ){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => this.categorias = listaCategorias
    })
  }

  salvar(){

    this.camposForm.markAllAsTouched();
    
    if(this.camposForm.valid){
      this.lugarService.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log("Cadastrado com sucesso!", lugar);
          this.camposForm.reset();
        },
        error: erro => console.error("Ocorreu um erro: ", erro)
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean{
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required']

  }
}
