import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { PageListCanalComponent } from './canal/pages/page-list-canal/page-list-canal.component';
import { CanalComponent } from './canal/components/canal/canal.component';
import { CanalModule } from './canal/canal.module';
import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    CanalModule,
    HttpClientModule,
    UiModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
