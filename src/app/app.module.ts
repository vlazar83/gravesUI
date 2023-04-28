import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KonvaModule } from 'ng2-konva';
import { AppComponent } from './app.component';
import { GraveYardComponent } from './graveYard/graveYard.component';

@NgModule({
  declarations: [
    AppComponent,
    GraveYardComponent
  ],
  imports: [
    BrowserModule,
    KonvaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
