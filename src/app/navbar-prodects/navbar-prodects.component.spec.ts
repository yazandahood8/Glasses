import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProdectsComponent } from './navbar-prodects.component';

describe('NavbarProdectsComponent', () => {
  let component: NavbarProdectsComponent;
  let fixture: ComponentFixture<NavbarProdectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarProdectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProdectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
