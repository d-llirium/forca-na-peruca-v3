import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../compartilhado/cadastro';
import { CadastroService } from './../compartilhado/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit 
{
  Cadastros = [];

  constructor(
    private cadService: CadastroService
  ) { }

  ngOnInit() 
  {
    this.fetchCadastros();
    let cadastroRes = this.cadService.getCadastroList();
    cadastroRes.snapshotChanges().subscribe(res => {
      this.Cadastros = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Cadastros.push(a as Cadastro);
      })
    })
  }

  fetchCadastros() 
  {
    this.cadService.getCadastroList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteCadastro(id) 
  {
    console.log(id)
    if (window.confirm('Você quer mesmo deletar o seu cadastro?')) {
      this.cadService.deleteCadastro(id)
    }
  }
}
