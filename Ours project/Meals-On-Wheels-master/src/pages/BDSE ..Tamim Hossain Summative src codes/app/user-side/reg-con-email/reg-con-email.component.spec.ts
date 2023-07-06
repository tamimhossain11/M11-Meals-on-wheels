import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegConEmailComponent } from './reg-con-email.component';

describe('RegConEmailComponent', () => {
  let component: RegConEmailComponent;
  let fixture: ComponentFixture<RegConEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegConEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegConEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
