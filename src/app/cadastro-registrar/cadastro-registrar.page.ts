import { Component, OnInit } from '@angular/core';
// -- para o formulário
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CadastroService } from './../compartilhado/cadastro.service';

@Component({
  selector: 'app-cadastro-registrar',
  templateUrl: './cadastro-registrar.page.html',
  styleUrls: ['./cadastro-registrar.page.scss'],
})
export class CadastroRegistrarPage implements OnInit 
{
  cadastroForm: FormGroup;

  constructor(
    private cadService: CadastroService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() 
  {
    this.cadastroForm = this.fb.group({
      nome: [''],
      email: ['']
    })
  }

  formSubmit() {
    if (!this.cadastroForm.valid) {
      return false;
    } else {
      this.cadService.createCadastro(this.cadastroForm.value).then(res => {
        console.log(res)
        this.cadastroForm.reset();
        this.router.navigate(['/cadastro']);
      })
        .catch(error => console.log(error));
    }
  }

}
