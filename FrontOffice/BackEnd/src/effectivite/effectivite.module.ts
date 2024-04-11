import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EffectiviteController } from './effectivite.controller';
import { EffectiviteService } from './effectivite.service';
import { Planning } from 'src/entities/planning.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Planning])],
  controllers: [EffectiviteController],
  providers: [EffectiviteService],
})
export class EffectiviteModule {}
