import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planning } from 'src/entities/planning.entity';

@Injectable()
export class EffectiviteService {
  constructor(
    @InjectRepository(Planning)
    private readonly planningRepository: Repository<Planning>,
  ) {}

  async updateStatus(classValue: string, jour: string, heure: string): Promise<void> {
    const planning = await this.planningRepository.findOne({ where: { [`class`]: classValue, jour, heure } });
    if (planning) {
      planning.statusCours = 'YES';
      await this.planningRepository.save(planning);
    }
  }
}
