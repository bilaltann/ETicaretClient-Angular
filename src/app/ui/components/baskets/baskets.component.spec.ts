import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketsComponent } from './baskets.component';

describe('BasketsComponent', () => {
  let component: BasketsComponent;
  let fixture: ComponentFixture<BasketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
