import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab10StatusPage } from './tab10-status.page';

describe('Tab10StatusPage', () => {
  let component: Tab10StatusPage;
  let fixture: ComponentFixture<Tab10StatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab10StatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
