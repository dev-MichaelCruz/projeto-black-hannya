import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselDuComponent } from './carrosel-du.component';

describe('CarroselDuComponent', () => {
  let component: CarroselDuComponent;
  let fixture: ComponentFixture<CarroselDuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroselDuComponent]
    });
    fixture = TestBed.createComponent(CarroselDuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
