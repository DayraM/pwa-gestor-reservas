import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspacios } from './lista-espacios';

describe('ListaEspacios', () => {
  let component: ListaEspacios;
  let fixture: ComponentFixture<ListaEspacios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEspacios],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEspacios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
