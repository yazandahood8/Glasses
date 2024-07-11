import { TestBed } from '@angular/core/testing';

import { ProductsService2Service } from './products-service2.service';

describe('ProductsService2Service', () => {
  let service: ProductsService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
