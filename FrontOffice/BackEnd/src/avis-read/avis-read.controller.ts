import { Controller, Get, Query } from '@nestjs/common';
import { AvisReadService } from './avis-read.service';
import { Avis } from 'src/entities/avis.entity';

@Controller('avis-read')
export class AvisReadController {
  constructor(private readonly avisReadService: AvisReadService) {}

  @Get()
  async getAvis(@Query('class') classe: string): Promise<Avis[]> {
    return this.avisReadService.getAvisByClasse(classe);
  }
}
