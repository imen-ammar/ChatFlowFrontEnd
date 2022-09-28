import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMessageComponent } from './components/form-message/form-message.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    FormMessageComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    FormMessageComponent,
    HeaderComponent,
    NavComponent,UiModule
  ]
})
export class CoreModule { }
