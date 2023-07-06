import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassConfirmComponent } from './forget-pass-confirm.component';

describe('ForgetPassConfirmComponent', () => {
  let component: ForgetPassConfirmComponent;
  let fixture: ComponentFixture<ForgetPassConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPassConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPassConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
