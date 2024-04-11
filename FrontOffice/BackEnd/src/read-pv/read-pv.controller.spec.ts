import { Test, TestingModule } from '@nestjs/testing';
import { ReadPvController } from './read-pv.controller';

describe('ReadPvController', () => {
  let controller: ReadPvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadPvController],
    }).compile();

    controller = module.get<ReadPvController>(ReadPvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
