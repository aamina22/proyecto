import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTComponent } from './titulo-t.component';

describe('TituloTComponent', () => {
  let component: TituloTComponent;
  let fixture: ComponentFixture<TituloTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
