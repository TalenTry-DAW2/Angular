import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosContactoComponent } from './formularios-contacto.component';

describe('FormulariosContactoComponent', () => {
  let component: FormulariosContactoComponent;
  let fixture: ComponentFixture<FormulariosContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
