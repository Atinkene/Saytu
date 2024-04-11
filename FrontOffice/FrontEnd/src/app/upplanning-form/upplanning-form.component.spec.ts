import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpplanningFormComponent } from './upplanning-form.component';

describe('UpplanningFormComponent', () => {
  let component: UpplanningFormComponent;
  let fixture: ComponentFixture<UpplanningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpplanningFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpplanningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
