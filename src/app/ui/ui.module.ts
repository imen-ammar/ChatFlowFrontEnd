import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { CanalModule } from '../canal/canal.module';
//import { PageListCanalComponent } from '../canal/pages/page-list-canal/page-list-canal.component';



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
