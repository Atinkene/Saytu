import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordPedagogiqueComponent } from './coord-pedagogique.component';

describe('CoordPedagogiqueComponent', () => {
  let component: CoordPedagogiqueComponent;
  let fixture: ComponentFixture<CoordPedagogiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoordPedagogiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordPedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
