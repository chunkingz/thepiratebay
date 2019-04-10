import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top40TorrentsComponent } from './top40-torrents.component';

describe('Top40TorrentsComponent', () => {
  let component: Top40TorrentsComponent;
  let fixture: ComponentFixture<Top40TorrentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top40TorrentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top40TorrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
