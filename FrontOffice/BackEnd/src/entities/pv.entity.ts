// pv.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Pv')
export class Pv {
  @PrimaryGeneratedColumn()
  idPv: number;

  @Column({ type: 'text', nullable: true })
  contenu: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
