import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab9VideoPage } from './tab9-video.page';

describe('Tab9VideoPage', () => {
  let component: Tab9VideoPage;
  let fixture: ComponentFixture<Tab9VideoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab9VideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
