import { TestBed } from '@angular/core/testing';

import { FireDataGetterService } from './fire-data-getter.service';

describe('FireDataGetterService', () => {
  let service: FireDataGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireDataGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
