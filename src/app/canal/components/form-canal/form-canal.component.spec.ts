import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCanalComponent } from './form-canal.component';

describe('FormCanalComponent', () => {
  let component: FormCanalComponent;
  let fixture: ComponentFixture<FormCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
