import { Component, EventEmitter, OnInit, ViewChild } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TokenApiService } from "../services/token-api.service";
import { GravesApiService } from "../services/graves-api.service";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { GraveDetailsComponent } from "../grave-details/grave-details.component";
import { DataService } from "../services/data.service";
import { GraveDetails } from "../model/model";


@Component({
  selector: "app-grave-yard",
  templateUrl: "./graveYard.component.html",
  styleUrls: ["./graveYard.component.css"],
})
export class GraveYardComponent implements OnInit {
  public configStage: Observable<any> = of({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  searchText = "";
  gravesConfigs: Observable<any>[] = [
    of({
      x: 700,
      y: 126,
      width: 100,
      height: 50,
      fill: "green",
      location: "AA1",
    }),
    of({
      x: 900,
      y: 126,
      width: 100,
      height: 50,
      fill: "green",
      location: "AA2",
    }),
  ];

  public configCircle: Observable<any> = of({
    x: 100,
    y: 100,
    radius: 70,
    fill: "red",
    stroke: "black",
    strokeWidth: 4,
  });

  public handleRectClick(component: any) {
    console.log("Hello Rect", component);
    console.log("Hello Grave", component.cacheProps);
    this.getJwtToken();
    this.gravesApi.getGraveDetails(component.cacheProps.location).subscribe((data: any) => {
      console.log("response: ", data);

      let graveDetails : GraveDetails = {location: '', note: '', persons: []};
      graveDetails.location = data[0].location;
      graveDetails.note = data[0].note;
      graveDetails.persons = data[0].persons;
      this.dataService.changeGraveDetails(graveDetails);
      this.openBottomSheet();
    });
  }

  public configImage: EventEmitter<any> = new EventEmitter();

  public handleClick(component: any) {
    console.log("Hello Circle", component);
  }

  constructor(private dataService: DataService, private _bottomSheet: MatBottomSheet, public gravesApi: GravesApiService, public tokenApi: TokenApiService, private http: HttpClient) {}

  openBottomSheet(): void {
    this._bottomSheet.open(GraveDetailsComponent);
  }


  ngOnInit(): void {
    const planetsImage = new Image();
    planetsImage.src = "./../assets/planets.png";
    planetsImage.onload = () => {
      this.configImage.emit({
        image: planetsImage,
      });
    };
  }

  getJwtToken(): any {
    if (localStorage.getItem("gravesAPI_JWT") == undefined || localStorage.getItem("gravesAPI_JWT") == null) {
      this.tokenApi.getToken().subscribe((data: any) => {
        console.log(data);
        localStorage.setItem("gravesAPI_JWT", data.access_token);
        localStorage.setItem("gravesAPI_JWT_TIMESTAMP", Date.now().toString());
      });
    } else {
      // check if expired
      var oldTimestamp = localStorage.getItem("gravesAPI_JWT_TIMESTAMP");
      if (Number(oldTimestamp) + 86400000 <= Date.now()) {
        this.tokenApi.getToken().subscribe((data: any) => {
          console.log(data);
          localStorage.setItem("gravesAPI_JWT", data.access_token);
          localStorage.setItem("gravesAPI_JWT_TIMESTAMP", Date.now().toString());
        });
      }
    }
  }

  public searchClicked() {
    this.getJwtToken();
    this.gravesApi.searchForGraveByPersonName(this.searchText).subscribe((data: any) => {
      console.log("response: ", data);
    });
  }
}
