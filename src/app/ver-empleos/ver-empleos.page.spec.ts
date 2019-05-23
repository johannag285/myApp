import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmpleosPage } from './ver-empleos.page';

describe('VerEmpleosPage', () => {
  let component: VerEmpleosPage;
  let fixture: ComponentFixture<VerEmpleosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEmpleosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEmpleosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
