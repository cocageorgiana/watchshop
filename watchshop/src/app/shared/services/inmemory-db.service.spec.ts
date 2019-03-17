import { TestBed } from '@angular/core/testing';

import { InmemoryDbService } from './inmemory-db.service';

describe('InmemoryDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InmemoryDbService = TestBed.get(InmemoryDbService);
    expect(service).toBeTruthy();
  });
});
