// read-pv.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pv } from 'src/entities/pv.entity';
import { ReadPvController } from './read-pv.controller';
import { ReadPvService } from './read-pv.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pv])],
  controllers: [ReadPvController],
  providers: [ReadPvService],
})
export class ReadPvModule {}
