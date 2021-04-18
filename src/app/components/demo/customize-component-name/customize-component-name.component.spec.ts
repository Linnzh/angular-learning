import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeComponentNameComponent } from './customize-component-name.component';

describe('CustomizeComponentNameComponent', () => {
  let component: CustomizeComponentNameComponent;
  let fixture: ComponentFixture<CustomizeComponentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeComponentNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeComponentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
