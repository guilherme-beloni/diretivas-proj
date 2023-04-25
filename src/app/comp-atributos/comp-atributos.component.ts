import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo: string='enable'
  corFundo: string='green'
  corFonte: string='white'
  item: string = ''
  lista: string [] = []


  constructor(){}
  ngOnInit(): void {}
  

  adicionarLista(){
    this.lista.push(this.item)
  }


  removerLista(index: number){
    this.lista.splice(index, 1);
  }

  trocar(){
    if(this.estilo == 'disable'){
      this.estilo = 'enable'
    }else{
      this.estilo = 'disable'
    }
  }
}

