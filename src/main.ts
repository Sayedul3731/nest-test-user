import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config(); // loads .env before anything else

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // optional: enable CORS (if using frontend)
  app.enableCors();

  const port = process.env.PORT || 3344;
  await app.listen(port);
  console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();
