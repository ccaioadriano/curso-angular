import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
