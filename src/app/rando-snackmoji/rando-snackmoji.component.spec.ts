import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandoSnackmojiComponent } from './rando-snackmoji.component';

describe('RandoSnackmojiComponent', () => {
  let component: RandoSnackmojiComponent;
  let fixture: ComponentFixture<RandoSnackmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandoSnackmojiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandoSnackmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
