import { Test, TestingModule } from '@nestjs/testing';
import { ReadRapportController } from './read-rapport.controller';

describe('ReadRapportController', () => {
  let controller: ReadRapportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadRapportController],
    }).compile();

    controller = module.get<ReadRapportController>(ReadRapportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
