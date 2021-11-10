import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistForumComponent } from './artist-forum.component';

describe('ArtistForumComponent', () => {
  let component: ArtistForumComponent;
  let fixture: ComponentFixture<ArtistForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
