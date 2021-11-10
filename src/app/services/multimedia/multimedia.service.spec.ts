/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MultimediaService } from './multimedia.service';

describe('Service: Multimedia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultimediaService]
    });
  });

  it('should ...', inject([MultimediaService], (service: MultimediaService) => {
    expect(service).toBeTruthy();
  }));
});
