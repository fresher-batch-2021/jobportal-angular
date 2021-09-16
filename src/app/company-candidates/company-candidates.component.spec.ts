import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCandidatesComponent } from './company-candidates.component';

describe('CompanyCandidatesComponent', () => {
  let component: CompanyCandidatesComponent;
  let fixture: ComponentFixture<CompanyCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
