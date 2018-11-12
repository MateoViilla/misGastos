import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosListPage } from './gastos-list.page';

describe('GastosListPage', () => {
  let component: GastosListPage;
  let fixture: ComponentFixture<GastosListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
