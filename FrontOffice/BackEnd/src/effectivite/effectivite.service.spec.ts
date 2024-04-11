import { Test, TestingModule } from '@nestjs/testing';
import { EffectiviteService } from './effectivite.service';

describe('EffectiviteService', () => {
  let service: EffectiviteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EffectiviteService],
    }).compile();

    service = module.get<EffectiviteService>(EffectiviteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
