import { Component, OnInit } from "@angular/core";
import { TokenApiService } from "../services/token-api.service";
import { GravesApiService } from "../services/graves-api.service";
import { DataService } from "../services/data.service";
import { GraveDetails } from "../model/model";

export interface GraveListElement {
  location: string;
  note: string;
  person: string;
  bornDate: string;
  deathDate: string;
}

@Component({
  selector: "app-search-panel",
  templateUrl: "./search-panel.component.html",
  styleUrls: ["./search-panel.component.css"],
})
export class SearchPanelComponent implements OnInit {
  displayedColumns: string[] = ["location", "note", "person", "bornDate", "deathDate"];

  graveList: GraveListElement[] = [];

  panelOpenState = true;
  searchText = "";
  constructor(private dataService: DataService, public gravesApi: GravesApiService, public tokenApi: TokenApiService) {}

  ngOnInit(): void {
    // this.dataService.currentGraveSearchResult$.subscribe((message) => (this.graveList = message));
  }

  public searchClicked() {
    this.getJwtToken();
    this.gravesApi.searchForGraveByPersonName(this.searchText).subscribe((data: any) => {
      console.log("response: ", data);

      var newGraveListElements: GraveListElement[] = [];
      this.graveList = [];
      data.forEach((element: any) => {

        element.persons.forEach((personElement: any) => {
          var newGraveListElement: GraveListElement = {
            location: "",
            note: "",
            person: "",
            bornDate: "",
            deathDate: "",
          };
  
          newGraveListElement.location = element.location;
          newGraveListElement.note = element.note;
          newGraveListElement.person = personElement.name;
          newGraveListElement.bornDate = personElement.bornDate;
          newGraveListElement.deathDate = personElement.deathDate;
          newGraveListElements.push(newGraveListElement);
        });

        this.graveList = [...newGraveListElements];
      });
    });
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
}
