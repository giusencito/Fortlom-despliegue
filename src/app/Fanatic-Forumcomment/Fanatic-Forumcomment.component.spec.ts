/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FanaticForumcommentComponent } from './Fanatic-Forumcomment.component';

describe('FanaticForumcommentComponent', () => {
  let component: FanaticForumcommentComponent;
  let fixture: ComponentFixture<FanaticForumcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanaticForumcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanaticForumcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
