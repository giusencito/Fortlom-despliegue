/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ForumcommentService } from './forumcomment.service';

describe('Service: Forumcomment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumcommentService]
    });
  });

  it('should ...', inject([ForumcommentService], (service: ForumcommentService) => {
    expect(service).toBeTruthy();
  }));
});
