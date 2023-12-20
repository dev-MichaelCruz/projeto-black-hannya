import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselJackComponent } from './carrosel-jack.component';

describe('CarroselJackComponent', () => {
  let component: CarroselJackComponent;
  let fixture: ComponentFixture<CarroselJackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroselJackComponent]
    });
    fixture = TestBed.createComponent(CarroselJackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
