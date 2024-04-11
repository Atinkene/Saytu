// avis.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avis } from 'src/entities/avis.entity';

@Injectable()
export class AvisService {
  constructor(
    @InjectRepository(Avis)
    private readonly avisRepository: Repository<Avis>,
  ) {}

  async getAvis(): Promise<Avis[]> {
    return this.avisRepository.find();
  }

  async createAvis(avisData: Avis): Promise<Avis> {
    return this.avisRepository.save(avisData);
  }
}
