import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab8TriviaPage } from './tab8-trivia.page';

describe('Tab8TriviaPage', () => {
  let component: Tab8TriviaPage;
  let fixture: ComponentFixture<Tab8TriviaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab8TriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
