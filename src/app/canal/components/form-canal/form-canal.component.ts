import { Component, OnInit } from '@angular/core';
import { Canal } from 'src/app/core/model/canal';

import { EventEmitter, Input,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-form-canal',
  templateUrl: './form-canal.component.html',
  styleUrls: ['./form-canal.component.scss']
})
export class FormCanalComponent implements OnInit {
//déclarer une proprieté qui vient du parent

@Input() init!: Canal;
//donner un nom au formulaire
public form!: FormGroup;

// evenement disponible à l'export
@Output() submitted = new EventEmitter<Canal>();
constructor(
//utilisation de form
private fb : FormBuilder
) {

}
ngOnInit(){
 console.log(this.init,'ngOnInit');
this.form = this.fb.group({
 id: [this.init.id],
 nom: [this.init.nom],
 });
}
ngOnChanges(){
  console.log(this.init,'ngOnChanges');
}
public onSubmit() {
console.log(this.form.value, 'validé');
// la suite ????
// vérifier le statut
 //si le staut est strictement egale à valid alors on emit,sinon non

this.submitted.emit(this.form.value);
}

}
