import { TestBed } from '@angular/core/testing';

import { ServiceBook } from './service-book';

describe('ServiceBook', () => {
  let service: ServiceBook;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBook);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
