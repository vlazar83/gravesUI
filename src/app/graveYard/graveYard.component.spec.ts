import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraveYardComponent } from './graveYard.component';

describe('GraveYardComponent', () => {
  let component: GraveYardComponent;
  let fixture: ComponentFixture<GraveYardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraveYardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraveYardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
