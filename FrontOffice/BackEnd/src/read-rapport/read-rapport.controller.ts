// read-rapport.controller.ts

import { Controller, Get } from '@nestjs/common';
import { ReadRapportService } from './read-rapport.service';
import { Rapport } from 'src/entities/rapport.entity';

@Controller('read-rapport')
export class ReadRapportController {
  constructor(private readonly readRapportService: ReadRapportService) {}

  @Get()
  async getAllRapports(): Promise<Rapport[]> {
    return this.readRapportService.getAllRapports();
  }
}
