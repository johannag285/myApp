import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Descripcion2Page } from './descripcion2.page';

describe('Descripcion2Page', () => {
  let component: Descripcion2Page;
  let fixture: ComponentFixture<Descripcion2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Descripcion2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Descripcion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
