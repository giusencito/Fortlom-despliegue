/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeArtistComponent } from './HomeArtist.component';

describe('HomeArtistComponent', () => {
  let component: HomeArtistComponent;
  let fixture: ComponentFixture<HomeArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
