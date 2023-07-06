import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegConComponent } from './reg-con.component';

describe('RegConComponent', () => {
  let component: RegConComponent;
  let fixture: ComponentFixture<RegConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
