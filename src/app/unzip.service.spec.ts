import { TestBed } from '@angular/core/testing';

import { UnzipService } from './unzip.service';

describe('UnzipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnzipService = TestBed.get(UnzipService);
    expect(service).toBeTruthy();
  });
});
