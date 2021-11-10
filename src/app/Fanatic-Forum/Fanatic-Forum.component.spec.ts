/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FanaticForumComponent } from './Fanatic-Forum.component';

describe('FanaticForumComponent', () => {
  let component: FanaticForumComponent;
  let fixture: ComponentFixture<FanaticForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanaticForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanaticForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
