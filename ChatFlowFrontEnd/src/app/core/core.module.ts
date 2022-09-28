import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    FormMessageComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormMessageComponent,
    HeaderComponent,
    NavComponent
  ]
})
export class CoreModule { }
