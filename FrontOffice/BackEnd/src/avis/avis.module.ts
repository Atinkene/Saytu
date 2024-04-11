// avis.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvisController } from './avis.controller';
import { AvisService } from './avis.service';
import { Avis } from 'src/entities/avis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Avis])],
  controllers: [AvisController],
  providers: [AvisService],
})
export class AvisModule {}
