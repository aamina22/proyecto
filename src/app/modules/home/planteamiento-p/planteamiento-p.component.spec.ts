import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteamientoPComponent } from './planteamiento-p.component';

describe('PlanteamientoPComponent', () => {
  let component: PlanteamientoPComponent;
  let fixture: ComponentFixture<PlanteamientoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanteamientoPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanteamientoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
