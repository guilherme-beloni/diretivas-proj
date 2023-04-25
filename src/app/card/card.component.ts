import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = []
  constructor(){
    this.produtos = [
      "mouse",
      "touch",
      "Teclado",
      "monitor"
    ];
  }
  ngOnInit(): void {
      console.log('onInit');
  }
  

  adicionar() {
    this.produtos.push("Cadeira Gamer", "Fone", "notebook")
  }

  removerUltimo() {this.produtos.pop()
  }
  

  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}