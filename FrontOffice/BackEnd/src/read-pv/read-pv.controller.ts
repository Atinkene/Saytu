// read-pv.controller.ts

import { Controller, Get } from '@nestjs/common';
import { ReadPvService } from './read-pv.service';
import { Pv } from 'src/entities/pv.entity';

@Controller('/read-pv')
export class ReadPvController {
  constructor(private readonly readPvService: ReadPvService) {}

  @Get()
  async getAllPv(): Promise<Pv[]> {
    return this.readPvService.getAllPv();
  }
}
