import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListCanalComponent } from './page-list-canal.component';

describe('PageListCanalComponent', () => {
  let component: PageListCanalComponent;
  let fixture: ComponentFixture<PageListCanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListCanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
