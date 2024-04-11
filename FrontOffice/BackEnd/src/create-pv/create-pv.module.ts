// create-pv.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatePvController } from './create-pv.controller';
import { CreatePvService } from './create-pv.service';
import { Pv } from 'src/entities/pv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pv])],
  controllers: [CreatePvController],
  providers: [CreatePvService],
})
export class CreatePvModule {}
