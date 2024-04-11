import { Test, TestingModule } from '@nestjs/testing';
import { AvisReadController } from './avis-read.controller';

describe('AvisReadController', () => {
  let controller: AvisReadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvisReadController],
    }).compile();

    controller = module.get<AvisReadController>(AvisReadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
