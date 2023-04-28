import { TestBed } from '@angular/core/testing';

import { GravesApiService } from './graves-api.service';

describe('GravesApiService', () => {
  let service: GravesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GravesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
