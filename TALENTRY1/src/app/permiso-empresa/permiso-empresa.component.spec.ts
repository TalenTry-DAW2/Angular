import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisoEmpresaComponent } from './permiso-empresa.component';

describe('PermisoEmpresaComponent', () => {
  let component: PermisoEmpresaComponent;
  let fixture: ComponentFixture<PermisoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisoEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
