import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipePedagogiqueComponent } from './equipe-pedagogique.component';

describe('EquipePedagogiqueComponent', () => {
  let component: EquipePedagogiqueComponent;
  let fixture: ComponentFixture<EquipePedagogiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipePedagogiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipePedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
