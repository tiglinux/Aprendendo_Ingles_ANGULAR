import { Component, OnInit } from '@angular/core';
import { Frase} from '../shared/frase.model';
import { FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  //Atributo publico 
  public frases: Frase[] = FRASES;
  public instrucao:string = 'Traduza a Frase!';


  constructor() { console.log(this.frases); }

  ngOnInit() {
  }
  //do tipo :void (não retorna nada.)
  public atualizaResposta():void{
    console.log('Teste');
  }

}
