import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GraveDetails, Person } from "../model/model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}
  
  private graveDetails = new BehaviorSubject<GraveDetails>({location: '', note: '', persons: []});
  currentGraveDetails$ = this.graveDetails.asObservable();

  changeGraveDetails(graveDetails: GraveDetails){
    this.graveDetails.next(graveDetails);
  }

}
