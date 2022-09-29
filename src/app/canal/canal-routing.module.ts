import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAjouterCanalComponent } from './pages/page-ajouter-canal/page-ajouter-canal.component';
import { PageListCanalComponent } from './pages/page-list-canal/page-list-canal.component';
import { PageModifierCanalComponent } from './pages/page-modifier-canal/page-modifier-canal.component';

const routes: Routes = [
  { path: 'add-canal', component: PageAjouterCanalComponent},
  {path: 'edit-canal', component: PageModifierCanalComponent},
  {path: 'list-canal', component: PageListCanalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanalRoutingModule { }
