import { TestBed } from '@angular/core/testing';

import { ChromoLanguageService } from './chromo-language.service';

describe('ChromoLanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChromoLanguageService = TestBed.get(ChromoLanguageService);
    expect(service).toBeTruthy();
  });
});
