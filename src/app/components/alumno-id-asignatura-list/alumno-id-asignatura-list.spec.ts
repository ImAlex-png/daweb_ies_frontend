import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoIdAsignaturaList } from './alumno-id-asignatura-list';

describe('AlumnoIdAsignaturaList', () => {
  let component: AlumnoIdAsignaturaList;
  let fixture: ComponentFixture<AlumnoIdAsignaturaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoIdAsignaturaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoIdAsignaturaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
