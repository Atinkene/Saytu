import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDepartementComponent } from './chef-departement.component';

describe('ChefDepartementComponent', () => {
  let component: ChefDepartementComponent;
  let fixture: ComponentFixture<ChefDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChefDepartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
