import { Component, OnInit } from "@angular/core";
import { GraveYardComponent } from "../graveYard/graveYard.component";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { DataService } from "../services/data.service";
import { GraveDetails, Person } from "../model/model";

@Component({
  selector: "app-grave-details",
  templateUrl: "./grave-details.component.html",
  styleUrls: ["./grave-details.component.css"],
})
export class GraveDetailsComponent implements OnInit {
  graveDetails: GraveDetails = { location: "", note: "", persons: [] };

  constructor(private dataService: DataService, private _bottomSheetRef: MatBottomSheetRef<GraveYardComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.dataService.currentGraveDetails$.subscribe((message) => (this.graveDetails = message));
  }
}
