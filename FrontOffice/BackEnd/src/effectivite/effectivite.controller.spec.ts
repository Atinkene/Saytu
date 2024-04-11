import { Test, TestingModule } from '@nestjs/testing';
import { EffectiviteController } from './effectivite.controller';

describe('EffectiviteController', () => {
  let controller: EffectiviteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EffectiviteController],
    }).compile();

    controller = module.get<EffectiviteController>(EffectiviteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
