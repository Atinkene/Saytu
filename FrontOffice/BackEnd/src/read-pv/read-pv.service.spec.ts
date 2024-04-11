import { Test, TestingModule } from '@nestjs/testing';
import { ReadPvService } from './read-pv.service';

describe('ReadPvService', () => {
  let service: ReadPvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadPvService],
    }).compile();

    service = module.get<ReadPvService>(ReadPvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
