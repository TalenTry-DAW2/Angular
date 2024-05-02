import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliPrivComponent } from './poli-priv.component';

describe('PoliPrivComponent', () => {
  let component: PoliPrivComponent;
  let fixture: ComponentFixture<PoliPrivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliPrivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliPrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
