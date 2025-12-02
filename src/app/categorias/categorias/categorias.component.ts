import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias',
  standalone: false,
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent {

  camposForm: FormGroup;

  constructor(private service: CategoriasService){
    this.camposForm = new FormGroup({
      nome: new FormControl ('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  salvar(){

    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid){
      this.service
        .salvar(this.camposForm.value)
        .subscribe({
          next: categoria => {
            console.log("Salvo com sucesso", categoria);
            this.camposForm.reset();
          },
          error: erro => console.error("Ocorreu um erro:", erro)
        });
    }
  }

  isCampoInvalido(nomeCampo: string) : boolean{
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched || false;
  }
}
