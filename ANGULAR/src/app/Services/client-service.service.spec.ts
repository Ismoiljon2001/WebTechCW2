import { TestBed } from '@angular/core/testing';

import { ClientsService } from './client-service.service';

describe('ClientServiceService', () => {
  let service: ClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
