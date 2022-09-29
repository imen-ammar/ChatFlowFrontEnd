import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageAjouterCanalComponent } from './canal/pages/page-ajouter-canal/page-ajouter-canal.component';


const routes: Routes = [
  { path: '', redirectTo: '/canal', pathMatch: 'full' },
  { path: 'add-canal', component: PageAjouterCanalComponent },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }