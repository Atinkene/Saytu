// create-rapport.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { CreateRapportService } from './create-rapport.service';
import { Rapport } from 'src/entities/rapport.entity';

@Controller('create-rapport')
export class CreateRapportController {
  constructor(private readonly createRapportService: CreateRapportService) {}

  @Post()
  async createRapport(@Body('contenu') contenu: string): Promise<Rapport> {
    return this.createRapportService.createRapport(contenu);
  }
}
