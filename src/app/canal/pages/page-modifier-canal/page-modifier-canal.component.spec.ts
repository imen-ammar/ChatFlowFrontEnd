import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifierCanalComponent } from './page-modifier-canal.component';

describe('PageModifierCanalComponent', () => {
  let component: PageModifierCanalComponent;
  let fixture: ComponentFixture<PageModifierCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifierCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifierCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
