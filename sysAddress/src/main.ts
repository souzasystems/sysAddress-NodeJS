import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setViewEngine('hbs'); // Troque para a engine usada, como hbs ou ejs
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  await app.listen(3000);
}
bootstrap();
