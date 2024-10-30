import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonLogger } from './winston/winston.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true, // 부트스트래핑 과정까지 nest-winston이 로그를 버퍼링하도록 설정
    logger: WinstonLogger,
  });
  console.log(`Application is running on: ${process.env.PORT}`);

  await app.listen(process.env.PORT ?? 3010);
}
bootstrap();
