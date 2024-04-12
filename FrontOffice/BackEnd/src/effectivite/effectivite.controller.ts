import { Controller, Get, Session, Post, Body, Param } from '@nestjs/common';
import { EffectiviteService } from './effectivite.service';

@Controller('effectivite')
export class EffectiviteController {
  constructor(private readonly effectiviteService: EffectiviteService) {}

  @Post('update-status/:classValue') // Ajoutez :classValue dans l'URL
  async updateStatus(
    @Param('classValue') classValue: string, // Utilisez Param pour récupérer la valeur depuis l'URL
    @Body() body: { jour: string; heure: string },
  ): Promise<void> {
    const { jour, heure } = body;
    await this.effectiviteService.updateStatus(classValue, jour, heure);
  }
}
