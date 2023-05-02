import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraveDetailsComponent } from './grave-details.component';

describe('GraveDetailsComponent', () => {
  let component: GraveDetailsComponent;
  let fixture: ComponentFixture<GraveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraveDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
