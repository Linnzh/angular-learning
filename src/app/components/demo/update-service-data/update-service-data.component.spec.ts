import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceDataComponent } from './update-service-data.component';

describe('UpdateServiceDataComponent', () => {
  let component: UpdateServiceDataComponent;
  let fixture: ComponentFixture<UpdateServiceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServiceDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
