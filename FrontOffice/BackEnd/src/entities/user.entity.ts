// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  email: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  password: string;

  @Column()
  status: string;

  @Column()
  class: string;
}
