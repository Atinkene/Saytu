// create-rapport.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rapport } from 'src/entities/rapport.entity';
import { CreateRapportController } from './create-rapport.controller';
import { CreateRapportService } from './create-rapport.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rapport])],
  controllers: [CreateRapportController],
  providers: [CreateRapportService],
})
export class CreateRapportModule {}
