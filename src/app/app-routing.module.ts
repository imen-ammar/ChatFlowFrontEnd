import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/canal', pathMatch:'full'},

  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,

    {
      preloadingStrategy : PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
