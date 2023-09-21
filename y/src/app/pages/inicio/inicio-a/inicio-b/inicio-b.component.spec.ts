import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBComponent } from './inicio-b.component';

describe('InicioBComponent', () => {
  let component: InicioBComponent;
  let fixture: ComponentFixture<InicioBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioBComponent]
    });
    fixture = TestBed.createComponent(InicioBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
