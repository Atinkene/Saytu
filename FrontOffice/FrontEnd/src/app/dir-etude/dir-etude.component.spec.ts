import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirEtudeComponent } from './dir-etude.component';

describe('DirEtudeComponent', () => {
  let component: DirEtudeComponent;
  let fixture: ComponentFixture<DirEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirEtudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
