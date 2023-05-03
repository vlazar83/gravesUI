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
import { FormsModule } from "@angular/forms";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { GraveDetailsComponent } from "./grave-details/grave-details.component";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { SearchPanelComponent } from "./search-panel/search-panel.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [AppComponent, GraveYardComponent, GraveDetailsComponent, SearchPanelComponent],
  imports: [
    BrowserModule,
    KonvaModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
