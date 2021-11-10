/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Event_fanaticService } from './event_fanatic.service';

describe('Service: Event_fanatic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Event_fanaticService]
    });
  });

  it('should ...', inject([Event_fanaticService], (service: Event_fanaticService) => {
    expect(service).toBeTruthy();
  }));
});
