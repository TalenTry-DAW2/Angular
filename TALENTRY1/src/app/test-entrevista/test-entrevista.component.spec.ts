import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEntrevistaComponent } from './test-entrevista.component';

describe('TestEntrevistaComponent', () => {
  let component: TestEntrevistaComponent;
  let fixture: ComponentFixture<TestEntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEntrevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
