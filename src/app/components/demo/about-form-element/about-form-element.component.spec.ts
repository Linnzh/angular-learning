import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFormElementComponent } from './about-form-element.component';

describe('AboutFormElementComponent', () => {
  let component: AboutFormElementComponent;
  let fixture: ComponentFixture<AboutFormElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFormElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
