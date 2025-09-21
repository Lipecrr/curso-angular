import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraTemperatura } from './calculadora-temperatura';

describe('CalculadoraTemperatura', () => {
  let component: CalculadoraTemperatura;
  let fixture: ComponentFixture<CalculadoraTemperatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraTemperatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraTemperatura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
