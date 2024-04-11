// avis.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { AvisService } from './avis.service';
import { Avis } from 'src/entities/avis.entity';

@Controller('avis')
export class AvisController {
  constructor(private readonly avisService: AvisService) {}

  @Get()
  async getAvis(): Promise<Avis[]> {
    return this.avisService.getAvis();
  }

  @Post()
  async createAvis(@Body() avisData: Avis): Promise<Avis> {
    return this.avisService.createAvis(avisData);
  }
}
