import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvFormComponent } from './pv-form.component';

describe('PvFormComponent', () => {
  let component: PvFormComponent;
  let fixture: ComponentFixture<PvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PvFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
