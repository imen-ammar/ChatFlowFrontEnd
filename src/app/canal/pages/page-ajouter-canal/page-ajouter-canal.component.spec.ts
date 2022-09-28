import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterCanalComponent } from './page-ajouter-canal.component';

describe('PageAjouterCanalComponent', () => {
  let component: PageAjouterCanalComponent;
  let fixture: ComponentFixture<PageAjouterCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
