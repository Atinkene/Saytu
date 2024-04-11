import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespClassComponent } from './resp-class.component';

describe('RespClassComponent', () => {
  let component: RespClassComponent;
  let fixture: ComponentFixture<RespClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RespClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
