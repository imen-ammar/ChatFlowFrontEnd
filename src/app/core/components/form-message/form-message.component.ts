import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from '../../model/message';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {

  @Input() init!: Message;


  @Output() submitted = new EventEmitter<Message>();


  public form!: FormGroup;




  constructor(
    private fb : FormBuilder

    ) { }


  ngOnInit(){
    console.log(this.init,'ngOnInit');
   this.form = this.fb.group({
    id: [this.init.id],
    contenu: [this.init.contenu],
    time: [this.init.time],

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

   this.submitted.emit(this.form.value );
   }
   
  }
