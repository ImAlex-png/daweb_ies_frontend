import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasDetail } from './asignaturas-detail';

describe('AsignaturasDetail', () => {
  let component: AsignaturasDetail;
  let fixture: ComponentFixture<AsignaturasDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturasDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturasDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
