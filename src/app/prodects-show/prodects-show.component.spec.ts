import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectsShowComponent } from './prodects-show.component';

describe('ProdectsShowComponent', () => {
  let component: ProdectsShowComponent;
  let fixture: ComponentFixture<ProdectsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdectsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdectsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
