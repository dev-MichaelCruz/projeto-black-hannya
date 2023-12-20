import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselRoComponent } from './carrosel-ro.component';

describe('CarroselRoComponent', () => {
  let component: CarroselRoComponent;
  let fixture: ComponentFixture<CarroselRoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroselRoComponent]
    });
    fixture = TestBed.createComponent(CarroselRoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
