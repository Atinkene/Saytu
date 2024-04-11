// avis-read.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvisReadController } from './avis-read.controller';
import { AvisReadService } from './avis-read.service';
import { Avis } from 'src/entities/avis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avis])],
  controllers: [AvisReadController],
  providers: [AvisReadService],
})
export class AvisReadModule {}
