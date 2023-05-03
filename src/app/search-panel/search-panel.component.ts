import { Component, OnInit } from '@angular/core';
import { TokenApiService } from '../services/token-api.service';
import { GravesApiService } from '../services/graves-api.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  panelOpenState = true;
  searchText = "";
  constructor(public gravesApi: GravesApiService, public tokenApi: TokenApiService) { }

  ngOnInit(): void {
  }

  public searchClicked() {
    this.getJwtToken();
    this.gravesApi.searchForGraveByPersonName(this.searchText).subscribe((data: any) => {
      console.log("response: ", data);
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
