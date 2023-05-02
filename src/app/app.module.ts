import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { KonvaModule } from "ng2-konva";
import { AppComponent } from "./app.component";
import { GraveYardComponent } from "./graveYard/graveYard.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, GraveYardComponent],
  imports: [
    BrowserModule,
    KonvaModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
