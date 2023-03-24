import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionItemComponent } from './visualizacion-item.component';

describe('VisualizacionItemComponent', () => {
  let component: VisualizacionItemComponent;
  let fixture: ComponentFixture<VisualizacionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
