import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespPedagogiqueComponent } from './resp-pedagogique.component';

describe('RespPedagogiqueComponent', () => {
  let component: RespPedagogiqueComponent;
  let fixture: ComponentFixture<RespPedagogiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RespPedagogiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespPedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
