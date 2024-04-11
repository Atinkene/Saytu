import { Test, TestingModule } from '@nestjs/testing';
import { CreateRapportController } from './create-rapport.controller';

describe('CreateRapportController', () => {
  let controller: CreateRapportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateRapportController],
    }).compile();

    controller = module.get<CreateRapportController>(CreateRapportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
