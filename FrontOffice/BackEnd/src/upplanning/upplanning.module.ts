// upplanning.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upplanning } from 'src/entities/upplanning.entity';
import { UpplanningController } from './upplanning.controller';
import { UpplanningService } from './upplanning.service';

@Module({
  imports: [TypeOrmModule.forFeature([Upplanning])],
  controllers: [UpplanningController],
  providers: [UpplanningService],
})
export class UpplanningModule {}
