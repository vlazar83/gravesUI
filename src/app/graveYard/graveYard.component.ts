import { Component, EventEmitter, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

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

  gravesConfigs: Observable<any>[] = [
    of({
      x: 700,
      y: 126,
      width: 100,
      height: 50,
      fill: "green",
      location: "AA1"
    }),
    of({
      x: 900,
      y: 126,
      width: 100,
      height: 50,
      fill: "green",
      location: "AA2"
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
  }

  public configImage: EventEmitter<any> = new EventEmitter();

  public handleClick(component: any) {
    console.log("Hello Circle", component);
    
  }

  constructor() {}

  ngOnInit(): void {
    const planetsImage = new Image();
    planetsImage.src = "./../assets/planets.png";
    planetsImage.onload = () => {
      this.configImage.emit({
        image: planetsImage,
      });
    };
  }
}
