// read-pv.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pv } from 'src/entities/pv.entity';

@Injectable()
export class ReadPvService {
  constructor(
    @InjectRepository(Pv)
    private readonly pvRepository: Repository<Pv>,
  ) {}

  async getAllPv(): Promise<Pv[]> {
    return this.pvRepository.find();
  }
}
