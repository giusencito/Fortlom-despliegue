/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventFanaticComponent } from './event-fanatic.component';

describe('EventFanaticComponent', () => {
  let component: EventFanaticComponent;
  let fixture: ComponentFixture<EventFanaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFanaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFanaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
