import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistaResultadoComponent } from './entrevista-resultado.component';

describe('EntrevistaResultadoComponent', () => {
  let component: EntrevistaResultadoComponent;
  let fixture: ComponentFixture<EntrevistaResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistaResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrevistaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
