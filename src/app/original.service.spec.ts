import { TestBed } from '@angular/core/testing';

import { OriginalService } from './original.service';

describe('OriginalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OriginalService = TestBed.get(OriginalService);
    expect(service).toBeTruthy();
  });
});
