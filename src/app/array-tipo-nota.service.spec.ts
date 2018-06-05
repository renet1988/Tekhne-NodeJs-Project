import { TestBed, inject } from '@angular/core/testing';

import { ArrayTipoNotaService } from './array-tipo-nota.service';

describe('ArrayTipoNotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrayTipoNotaService]
    });
  });

  it('should be created', inject([ArrayTipoNotaService], (service: ArrayTipoNotaService) => {
    expect(service).toBeTruthy();
  }));
});
