import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateAComponentComponent } from './generate-a-component.component';

describe('GenerateAComponentComponent', () => {
  let component: GenerateAComponentComponent;
  let fixture: ComponentFixture<GenerateAComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateAComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateAComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
