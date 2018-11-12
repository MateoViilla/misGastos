import { TestBed } from '@angular/core/testing';

import { GastosListService } from './gastos-list.service';

describe('GastosListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GastosListService = TestBed.get(GastosListService);
    expect(service).toBeTruthy();
  });
});
