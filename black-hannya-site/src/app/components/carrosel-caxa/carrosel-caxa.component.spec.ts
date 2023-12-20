import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselCaxaComponent } from './carrosel-caxa.component';

describe('CarroselCaxaComponent', () => {
  let component: CarroselCaxaComponent;
  let fixture: ComponentFixture<CarroselCaxaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroselCaxaComponent]
    });
    fixture = TestBed.createComponent(CarroselCaxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
