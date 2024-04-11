import { Test, TestingModule } from '@nestjs/testing';
import { CreatePvController } from './create-pv.controller';

describe('CreatePvController', () => {
  let controller: CreatePvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatePvController],
    }).compile();

    controller = module.get<CreatePvController>(CreatePvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
