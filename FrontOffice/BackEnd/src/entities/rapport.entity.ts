// rapport.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Rapport')
export class Rapport {
  @PrimaryGeneratedColumn()
  idRapport: number;

  @Column()
  contenu: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
