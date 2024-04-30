import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAccesoComponent } from './error-acceso.component';

describe('ErrorAccesoComponent', () => {
  let component: ErrorAccesoComponent;
  let fixture: ComponentFixture<ErrorAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAccesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
