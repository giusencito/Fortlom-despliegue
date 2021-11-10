import { TestBed } from '@angular/core/testing';

import { FanaticForumService } from './fanatic-forum.service';

describe('FanaticForumService', () => {
  let service: FanaticForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FanaticForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
