import { Test, TestingModule } from '@nestjs/testing';
import { UpplanningController } from './upplanning.controller';

describe('UpplanningController', () => {
  let controller: UpplanningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpplanningController],
    }).compile();

    controller = module.get<UpplanningController>(UpplanningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
