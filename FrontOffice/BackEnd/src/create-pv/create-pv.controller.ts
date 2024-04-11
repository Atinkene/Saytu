// create-pv.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { CreatePvService } from './create-pv.service';
import { Pv } from 'src/entities/pv.entity';

@Controller('create-pv')
export class CreatePvController {
  constructor(private readonly createPvService: CreatePvService) {}

  @Post()
  async createPv(@Body('contenu') contenu: string): Promise<Pv> {
    return this.createPvService.createPv(contenu);
  }
}
