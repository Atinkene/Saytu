import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';
import { PlanningService } from './planning/planning.service';
import { PlanningController } from './planning/planning.controller';
import { Planning } from './entities/planning.entity';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PlanningModule } from './planning/planning.module';
import { UpplanningService } from './upplanning/upplanning.service';
import { UpplanningModule } from './upplanning/upplanning.module';
import { UpplanningController } from './upplanning/upplanning.controller';
import { Upplanning } from './entities/upplanning.entity';
import { AvisService } from './avis/avis.service';
import { AvisController } from './avis/avis.controller';
import { AvisModule } from './avis/avis.module';
import { Avis } from './entities/avis.entity';
import { AvisReadService } from './avis-read/avis-read.service';
import { AvisReadController } from './avis-read/avis-read.controller';
import { AvisReadModule } from './avis-read/avis-read.module';
import { CreatePvService } from './create-pv/create-pv.service';
import { CreatePvController } from './create-pv/create-pv.controller';
import { CreatePvModule } from './create-pv/create-pv.module';
import { Pv } from './entities/pv.entity';
import { ReadPvService } from './read-pv/read-pv.service';
import { ReadPvModule } from './read-pv/read-pv.module';
import { ReadPvController } from './read-pv/read-pv.controller';
import { CreateRapportModule } from './create-rapport/create-rapport.module';
import { Rapport } from './entities/rapport.entity';
import { CreateRapportService } from './create-rapport/create-rapport.service';
import { CreateRapportController } from './create-rapport/create-rapport.controller';
import { ReadRapportModule } from './read-rapport/read-rapport.module';
import { ReadRapportService } from './read-rapport/read-rapport.service';
import { ReadRapportController } from './read-rapport/read-rapport.controller';
import { EffectiviteController } from './effectivite/effectivite.controller';
import { EffectiviteService } from './effectivite/effectivite.service';
import { EffectiviteModule } from './effectivite/effectivite.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sgbd',
      password: 'passer',
      database: 'projetSGBD',
      entities: [User, Planning, Avis, Pv, Rapport],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User, Planning, Upplanning, Avis, Pv, Rapport, AuthModule,
      PlanningModule, UpplanningModule, AvisModule, AvisReadModule, CreatePvModule, ReadPvModule,CreateRapportModule, ReadRapportModule,EffectiviteModule,]),
  ],
  providers: [ 
    AuthService,
    PlanningService,
    UpplanningService,
    AvisService,
    AvisReadService,
    CreatePvService,
    ReadPvService, 
    CreateRapportService,
    ReadRapportService,
    EffectiviteService
  ],
  controllers: [
    AuthController,
    PlanningController,
    UpplanningController,
    AvisController,
    AvisReadController,
    CreatePvController, 
    ReadPvController,
    CreateRapportController,
    ReadRapportController,
    EffectiviteController,
  ],
})
export class AppModule {}
