import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionQaComponent } from './gestion-qa.component';

describe('GestionQaComponent', () => {
  let component: GestionQaComponent;
  let fixture: ComponentFixture<GestionQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionQaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
