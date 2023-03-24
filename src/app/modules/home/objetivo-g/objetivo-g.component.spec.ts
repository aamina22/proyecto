import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoGComponent } from './objetivo-g.component';

describe('ObjetivoGComponent', () => {
  let component: ObjetivoGComponent;
  let fixture: ComponentFixture<ObjetivoGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivoGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetivoGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
