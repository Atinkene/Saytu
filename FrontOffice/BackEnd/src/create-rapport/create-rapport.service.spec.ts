import { Test, TestingModule } from '@nestjs/testing';
import { CreateRapportService } from './create-rapport.service';

describe('CreateRapportService', () => {
  let service: CreateRapportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateRapportService],
    }).compile();

    service = module.get<CreateRapportService>(CreateRapportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
