import { Global, Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerContextMiddleware } from './middleware/logger-context.middleware';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsFilter } from './filters/exception.filter';

@Global()
@Module({
  imports: [],
  providers: [
    Logger,
    {
      provide: APP_FILTER,
      useClass: ExceptionsFilter,
    },
  ],
  exports: [Logger],
})
export class CommonModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerContextMiddleware).forRoutes('*');
  }
}
