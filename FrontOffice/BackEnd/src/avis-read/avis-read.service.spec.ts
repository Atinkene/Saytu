import { Test, TestingModule } from '@nestjs/testing';
import { AvisReadService } from './avis-read.service';

describe('AvisReadService', () => {
  let service: AvisReadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvisReadService],
    }).compile();

    service = module.get<AvisReadService>(AvisReadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
