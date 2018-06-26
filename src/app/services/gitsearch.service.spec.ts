import { TestBed, inject } from '@angular/core/testing';

import { GitsearchService } from './gitsearch.service';

describe('GitsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitsearchService]
    });
  });

  it('should be created', inject([GitsearchService], (service: GitsearchService) => {
    expect(service).toBeTruthy();
  }));
});
