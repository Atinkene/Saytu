import { Test, TestingModule } from '@nestjs/testing';
import { CreatePvService } from './create-pv.service';

describe('CreatePvService', () => {
  let service: CreatePvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePvService],
    }).compile();

    service = module.get<CreatePvService>(CreatePvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
