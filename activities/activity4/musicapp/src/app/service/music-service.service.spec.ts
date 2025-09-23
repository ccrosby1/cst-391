import { TestBed } from '@angular/core/testing';

import { MusicServiceService } from './music-service.service';

describe('MusicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service = TestBed.inject(MusicServiceService);
    expect(service).toBeTruthy();
  });
});
