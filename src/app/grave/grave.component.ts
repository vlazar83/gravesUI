import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-grave',
  templateUrl: './grave.component.html',
  styleUrls: ['./grave.component.css']
})
export class GraveComponent implements OnInit {
  public configStage: Observable<any> = of({
    width: window.innerWidth,
    height: window.innerHeight
  });

  public configCircle: Observable<any> = of({
    x: 100,
    y: 100,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });

  public configImage: EventEmitter<any> = new EventEmitter();

  public handleClick(component: any) {
    console.log('Hello Circle', component);
  }
  
  constructor() { }

  ngOnInit(): void {
    const planetsImage = new Image();
    planetsImage.src =
    './../assets/planets.png';
    planetsImage.onload = () => {
      this.configImage.emit({
        image: planetsImage
      });
    };

  }

}
