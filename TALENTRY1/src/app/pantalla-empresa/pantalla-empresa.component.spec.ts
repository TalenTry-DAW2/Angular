import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaEmpresaComponent } from './pantalla-empresa.component';

describe('PantallaEmpresaComponent', () => {
  let component: PantallaEmpresaComponent;
  let fixture: ComponentFixture<PantallaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
