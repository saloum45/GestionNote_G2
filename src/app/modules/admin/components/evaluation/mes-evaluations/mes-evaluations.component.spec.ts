import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEvaluationsComponent } from './mes-evaluations.component';

describe('MesEvaluationsComponent', () => {
  let component: MesEvaluationsComponent;
  let fixture: ComponentFixture<MesEvaluationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesEvaluationsComponent]
    });
    fixture = TestBed.createComponent(MesEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
