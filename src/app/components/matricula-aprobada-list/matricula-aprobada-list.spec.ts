import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaAprobadaList } from './matricula-aprobada-list';

describe('MatriculaAprobadaList', () => {
  let component: MatriculaAprobadaList;
  let fixture: ComponentFixture<MatriculaAprobadaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaAprobadaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculaAprobadaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
