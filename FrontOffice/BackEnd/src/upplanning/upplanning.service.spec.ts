import { Test, TestingModule } from '@nestjs/testing';
import { UpplanningService } from './upplanning.service';

describe('UpplanningService', () => {
  let service: UpplanningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpplanningService],
    }).compile();

    service = module.get<UpplanningService>(UpplanningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
