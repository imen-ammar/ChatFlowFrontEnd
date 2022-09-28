import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';



@NgModule({
  declarations: [
    IconEditComponent,
    IconDeleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconEditComponent,
    IconDeleteComponent
  ]
})
export class IconsModule { }
