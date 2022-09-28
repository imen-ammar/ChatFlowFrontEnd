import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanalRoutingModule } from './canal-routing.module';
import { CanalComponent } from './components/canal/canal.component';
import { PageAjouterCanalComponent } from './pages/page-ajouter-canal/page-ajouter-canal.component';
import { PageModifierCanalComponent } from './pages/page-modifier-canal/page-modifier-canal.component';
import { PageSupprimerCanalComponent } from './pages/page-supprimer-canal/page-supprimer-canal.component';


@NgModule({
  declarations: [
    CanalComponent,
    PageAjouterCanalComponent,
    PageModifierCanalComponent,
    PageSupprimerCanalComponent
  ],
  imports: [
    CommonModule,
    CanalRoutingModule
  ],
  exports: [
    CanalComponent,
    PageAjouterCanalComponent,
    PageModifierCanalComponent,
    PageSupprimerCanalComponent
  ]
})
export class CanalModule { }
