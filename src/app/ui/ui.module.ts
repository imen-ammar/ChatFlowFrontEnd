import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { CanalModule } from '../canal/canal.module';



@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule,
    CanalModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
