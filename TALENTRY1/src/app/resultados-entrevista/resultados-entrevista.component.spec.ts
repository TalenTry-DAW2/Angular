import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosEntrevistaComponent } from './resultados-entrevista.component';

describe('ResultadosEntrevistaComponent', () => {
  let component: ResultadosEntrevistaComponent;
  let fixture: ComponentFixture<ResultadosEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosEntrevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
