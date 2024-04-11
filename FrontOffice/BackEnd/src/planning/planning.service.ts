// src/planning/planning.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planning } from 'src/entities/planning.entity';

@Injectable()
export class PlanningService {
  constructor(
    @InjectRepository(Planning)
    private readonly planningRepository: Repository<Planning>,
  ) {}

  async findAllByClass(classValue: string): Promise<Planning[]> {
    return this.planningRepository.find({ where: { class: classValue } });
  }
}
