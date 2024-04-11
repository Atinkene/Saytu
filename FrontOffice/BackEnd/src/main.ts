import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors'; // Import du module cors

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration de la session
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );

  // Activation du middleware CORS
  app.use(cors());

  await app.listen(3000);
}
bootstrap();
