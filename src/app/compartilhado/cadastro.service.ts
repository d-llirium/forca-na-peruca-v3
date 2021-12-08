// -- importações necessárias 
import { Injectable } from '@angular/core';
import { Cadastro } from '../compartilhado/Cadastro';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
// -- CRUD --
export class CadastroService 
{
  // -- ATRIBUTOS
  cadastroListRef: AngularFireList<any>;
  cadastroRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
  // -- MÉTODOS
  // Create
  createCadastro(cad: Cadastro) 
  {
    return this.cadastroListRef.push({
      nome: cad.nome,
      email: cad.email,
    })
  }

  // Get Single
  getCadastro(id: string) {
    this.cadastroRef = this.db.object('/cadastro/' + id);
    return this.cadastroRef;
  }

  // Get List
  getCadastroList() {
    this.cadastroListRef = this.db.list('/cadastro');
    return this.cadastroListRef;
  }

  // Update
  updateCadastro(id, cad: Cadastro) {
    return this.cadastroRef.update({
      nome: cad.nome,
      email: cad.email,
    })
  }

  // Delete
  deleteCadastro(id: string) {
    this.cadastroRef = this.db.object('/cadastro/' + id);
    this.cadastroRef.remove();
  }
}
