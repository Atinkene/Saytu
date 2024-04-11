// src/entities/planning.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Planning')
export class Upplanning {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomCours: string;

  @Column()
  salle: string;

  @Column()
  prof: string;

  @Column()
  jour: string;

  @Column()
  heure: string;

  @Column()
  statusCours: string;

  @Column()
  class: string;
}
