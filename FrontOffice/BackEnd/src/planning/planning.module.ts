import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanningService } from './planning.service';
import { PlanningController } from './planning.controller';
import { Planning } from 'src/entities/planning.entity'; // Importez PlanningRepository


@Module({
  imports: [
    TypeOrmModule.forFeature([Planning]), // Importez l'entité de planification dans le module
  ],
  providers: [
    PlanningService,
  ],
  controllers: [
    PlanningController,
  ],
})
export class PlanningModule {}
