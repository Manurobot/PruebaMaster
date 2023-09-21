import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nosotros1Component } from './nosotros1.component';

describe('Nosotros1Component', () => {
  let component: Nosotros1Component;
  let fixture: ComponentFixture<Nosotros1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Nosotros1Component]
    });
    fixture = TestBed.createComponent(Nosotros1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
