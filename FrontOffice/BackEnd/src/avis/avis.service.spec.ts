import { Test, TestingModule } from '@nestjs/testing';
import { AvisService } from './avis.service';

describe('AvisService', () => {
  let service: AvisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvisService],
    }).compile();

    service = module.get<AvisService>(AvisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
