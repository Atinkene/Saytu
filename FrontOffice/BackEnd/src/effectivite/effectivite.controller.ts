// src/effectivite/controllers/effectivite.controller.ts

import { Controller, Get, Session, Post, Body } from '@nestjs/common';
import { EffectiviteService } from './effectivite.service';

@Controller('effectivite')
export class EffectiviteController {
  constructor(private readonly effectiviteService: EffectiviteService) {}

  @Post('update-status')
  async updateStatus(
    @Session() session: Record<string, any>,
    @Body() body: { jour: string; heure: string },
  ): Promise<void> {
    const classValue = session.class;
    const { jour, heure } = body;
    await this.effectiviteService.updateStatus(classValue, jour, heure);
  }
}
