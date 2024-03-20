import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistaCategoriasComponent } from './entrevista-categorias.component';

describe('EntrevistaCategoriasComponent', () => {
  let component: EntrevistaCategoriasComponent;
  let fixture: ComponentFixture<EntrevistaCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistaCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrevistaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
