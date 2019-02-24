import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchesDescriptionComponent } from './watches-description.component';

describe('WatchesDescriptionComponent', () => {
  let component: WatchesDescriptionComponent;
  let fixture: ComponentFixture<WatchesDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchesDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
