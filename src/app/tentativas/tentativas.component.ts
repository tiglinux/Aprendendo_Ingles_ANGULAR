import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  // tslint:disable-next-line: typedef-whitespace
  public coracaoCheio:string = "/frontEstudosANGULAR/src/assets/coracao_cheio.png";
  // tslint:disable-next-line: no-inferrable-types
  // tslint:disable-next-line: whitespace
  public coracaoVazio:string = "/frontEstudosANGULAR/src/assets/coracao_vazio.png";

  constructor() { }

  ngOnInit() {
  }

}
