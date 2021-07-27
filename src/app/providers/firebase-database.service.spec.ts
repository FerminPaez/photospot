/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebaseDatabaseService } from './firebase-database.service';

describe('Service: FirebaseDatabase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseDatabaseService]
    });
  });

  it('should ...', inject([FirebaseDatabaseService], (service: FirebaseDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
