// read-rapport.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rapport } from 'src/entities/rapport.entity';
import { ReadRapportController } from './read-rapport.controller';
import { ReadRapportService } from './read-rapport.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rapport])],
  controllers: [ReadRapportController],
  providers: [ReadRapportService],
})
export class ReadRapportModule {}
