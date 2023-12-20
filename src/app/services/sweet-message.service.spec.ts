import { TestBed } from '@angular/core/testing';

import { SweetMessageService } from './sweet-message.service';

describe('SweetMessageService', () => {
  let service: SweetMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
