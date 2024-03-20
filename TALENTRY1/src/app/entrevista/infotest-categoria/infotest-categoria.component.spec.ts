import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotestCategoriaComponent } from './infotest-categoria.component';

describe('InfotestCategoriaComponent', () => {
  let component: InfotestCategoriaComponent;
  let fixture: ComponentFixture<InfotestCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfotestCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfotestCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
