import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitSnackComponent } from './submit-snack.component';

describe('SubmitSnackComponent', () => {
  let component: SubmitSnackComponent;
  let fixture: ComponentFixture<SubmitSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
