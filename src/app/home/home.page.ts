import { Component, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
this.createForm();

  }

createForm(){
  this.form = this.formBuilder.group({
    aluno: ['', Validators.required],
    email:['', Validators.required],
    telefone:['', Validators.required],
    dtnascimento:['', Validators.required],
    nomepai:['', Validators.required],
    nomemae:['', Validators.required]
  })
}
salvar(){
  console.log(this.form.value);
  
}

}
