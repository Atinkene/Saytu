// src/planning/controllers/planning.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { Planning } from 'src/entities/planning.entity';
import { PlanningService } from './planning.service';

@Controller('planning')
export class PlanningController {
  constructor(private readonly planningService: PlanningService) {}

  @Get(':class')
  async findAllByClass(
    @Param('class') classValue: string,
  ): Promise<Planning[]> {
    return this.planningService.findAllByClass(classValue);
  }
}
