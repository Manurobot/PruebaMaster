import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAComponent } from './inicio-a.component';

describe('InicioAComponent', () => {
  let component: InicioAComponent;
  let fixture: ComponentFixture<InicioAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioAComponent]
    });
    fixture = TestBed.createComponent(InicioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
