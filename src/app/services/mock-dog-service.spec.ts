import { TestBed } from '@angular/core/testing';
import { MockDogService } from './mock-dog-service';

describe('MockDogService', () => {
  let service: MockDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
