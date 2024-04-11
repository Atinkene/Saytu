import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avis } from 'src/entities/avis.entity';

@Injectable()
export class AvisReadService {
  constructor(
    @InjectRepository(Avis)
    private readonly avisRepository: Repository<Avis>,
  ) {}

  async getAvisByClasse(classe: string): Promise<Avis[]> {
    return this.avisRepository.find({ where: { classe } });
  }
}
