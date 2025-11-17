import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

dotenv.config(); // loads .env before anything else

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // optional: enable CORS (if using frontend)
  app.enableCors();

  const port = process.env.PORT || 3344;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();
