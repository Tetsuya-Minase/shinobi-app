import {NestFactory} from '@nestjs/core';
import {join} from 'path';
import {NestExpressApplication} from '@nestjs/platform-express';
import {RootModule} from './modules/root.module';

async function bootstrap() {
  // const app = await NestFactory.create(RootModule);
  const app = await NestFactory.create<NestExpressApplication>(
    RootModule,
  );
  app.useStaticAssets(join(__dirname, 'public/'));
  app.listen(8080);
}

bootstrap();
