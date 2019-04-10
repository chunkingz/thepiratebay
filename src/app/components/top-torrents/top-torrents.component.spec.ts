import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTorrentsComponent } from './top-torrents.component';

describe('TorrentsComponent', () => {
  let component: TopTorrentsComponent;
  let fixture: ComponentFixture<TopTorrentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTorrentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTorrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
