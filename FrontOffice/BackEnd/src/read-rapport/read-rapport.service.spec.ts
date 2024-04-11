import { Test, TestingModule } from '@nestjs/testing';
import { ReadRapportService } from './read-rapport.service';

describe('ReadRapportService', () => {
  let service: ReadRapportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadRapportService],
    }).compile();

    service = module.get<ReadRapportService>(ReadRapportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
