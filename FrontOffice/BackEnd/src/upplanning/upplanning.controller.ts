// upplanning.controller.ts

import { Controller, Put, Param, Body } from '@nestjs/common';
import { UpplanningService } from './upplanning.service';
import { Planning } from 'src/entities/planning.entity';

@Controller('upplanning')
export class UpplanningController {
  constructor(private readonly upplanningService: UpplanningService) {}

  @Put(':className/:jour/:heure')
  async updateUpplanning(
    @Param('className') className: string,
    @Param('jour') jour: string,
    @Param('heure') heure: string,
    @Body() upplanningData: Planning, // Utilisation de l'entité Planning
  ): Promise<Planning> {
    return this.upplanningService.updateUpplanning(className, jour, heure, upplanningData);
  }
}
