// upplanning.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planning } from 'src/entities/planning.entity'; // Import de l'entité Planning

@Injectable()
export class UpplanningService {
  constructor(
    @InjectRepository(Planning)
    private readonly planningRepository: Repository<Planning>,
  ) {}

  async updateUpplanning(className: string, jour: string, heure: string, upplanningData: Planning): Promise<Planning> {
    let existingUpplanning = await this.planningRepository.findOne({ where: { 'class': className, jour, heure } });

    if (!existingUpplanning) {
      const newPlanning = new Planning();
      newPlanning.class = className; // Utilisation de la propriété 'class' au lieu de 'className'
      newPlanning.jour = jour;
      newPlanning.heure = heure;
      Object.assign(newPlanning, upplanningData);
      return this.planningRepository.save(newPlanning);
    } else {
      existingUpplanning = Object.assign(existingUpplanning, upplanningData);
      return this.planningRepository.save(existingUpplanning);
    }
  }
}
