import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupprimerCanalComponent } from './page-supprimer-canal.component';

describe('PageSupprimerCanalComponent', () => {
  let component: PageSupprimerCanalComponent;
  let fixture: ComponentFixture<PageSupprimerCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSupprimerCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSupprimerCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
