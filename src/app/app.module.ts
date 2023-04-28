import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KonvaModule } from 'ng2-konva';
import { AppComponent } from './app.component';
import { GraveComponent } from './grave/grave.component';

@NgModule({
  declarations: [
    AppComponent,
    GraveComponent
  ],
  imports: [
    BrowserModule,
    KonvaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
