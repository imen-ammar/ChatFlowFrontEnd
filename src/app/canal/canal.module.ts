import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalRoutingModule } from './canal-routing.module';
import { CanalComponent } from './components/canal/canal.component';
import { PageAjouterCanalComponent } from './pages/page-ajouter-canal/page-ajouter-canal.component';
import { PageModifierCanalComponent } from './pages/page-modifier-canal/page-modifier-canal.component';
import { PageSupprimerCanalComponent } from './pages/page-supprimer-canal/page-supprimer-canal.component';
import { PageListCanalComponent } from './pages/page-list-canal/page-list-canal.component';


@NgModule({
  declarations: [
    CanalComponent,
    PageAjouterCanalComponent,
    PageModifierCanalComponent,
    PageSupprimerCanalComponent,
    PageListCanalComponent,

  ],
  imports: [
    CommonModule,
    CanalRoutingModule
  ],
  exports: [
    CanalComponent,
    PageAjouterCanalComponent,
    PageModifierCanalComponent,
    PageSupprimerCanalComponent,
    PageListCanalComponent

  ]
})
export class CanalModule { }
