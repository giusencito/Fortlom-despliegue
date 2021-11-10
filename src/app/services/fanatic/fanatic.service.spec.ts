/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FanaticService } from './fanatic.service';

describe('Service: Fanatic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FanaticService]
    });
  });

  it('should ...', inject([FanaticService], (service: FanaticService) => {
    expect(service).toBeTruthy();
  }));
});
