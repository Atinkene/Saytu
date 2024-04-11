import { Test, TestingModule } from '@nestjs/testing';
import { AvisController } from './avis.controller';

describe('AvisController', () => {
  let controller: AvisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvisController],
    }).compile();

    controller = module.get<AvisController>(AvisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
