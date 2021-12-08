import { Component, OnInit } from '@angular/core';

interface IRecurso
{
  nome: string;
  icone: string;
}
interface IReferencia
{
  icone: string;
  referencia: string;
}

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit 
{
  // ATRIBUTOS
  private recursos: IRecurso[] = 
  [
    {
      nome: "macbook", 
      icone: "./assets/icon/apple-icon.png",
    },
    {
      nome: "visual studio code",
      icone: "./assets/icon/visual-code-icon.png"
    },
    {
      nome: "chrome",
      icone: "./assets/icon/chrome-icon.png"
    }
      
  ];
  private referencias: IReferencia[] =
  [
    {
      icone: "./assets/icon/apple-icon.png",
      referencia: "https://support.apple.com/pt-br/HT210222",
    },
    {
      icone: "./assets/icon/visual-code-icon.png",
      referencia: "https://code.visualstudio.com/download",
    },
    {
      icone: "./assets/icon/chrome-icon.png",
      referencia: "https://support.google.com/chrome/answer/95346?hl=pt-BR&co=GENIE.Platform%3DDesktop",
    }
  ]


  //construtor
  constructor() { }
  //MÉTODOS
  ngOnInit() {
  }

}
