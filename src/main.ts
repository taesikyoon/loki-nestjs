import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './environment/values/app.config';
import { ValidationPipe } from '@nestjs/common';
import { winstonLogger } from './common/winston/logger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true, // 기존 NestJS Logger를 사용하지 않고 winstonLogger를 사용하기 위해 설정
    logger: winstonLogger, // replacing logger
  });
  const configService = app.get(ConfigService);
  const appConfig: AppConfig = configService.get('APP');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(appConfig.APP_PORT);

  return app.getUrl();
}
bootstrap();
