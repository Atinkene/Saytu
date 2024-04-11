// avis.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Avis')
export class Avis {
  @PrimaryGeneratedColumn({ name: 'idAvis' })
  idAvis: number;

  @Column({ nullable: true, type: 'text' })
  contenu: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ name: 'class', nullable: true, length: 255 })
  classe: string;
}
