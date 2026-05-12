import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landinpage } from './landinpage';

describe('Landinpage', () => {
  let component: Landinpage;
  let fixture: ComponentFixture<Landinpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landinpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landinpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
