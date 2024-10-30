import {
  Controller,
  Get,
  Query,
  Logger,
  BadRequestException,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Controller('logs')
export class AppController {
  constructor() {}
  @Get('info')
  useInfoLog(@Query('message') message: string): string {
    if (!message) message = 'Test Message';

    console.log(message);
    return 'Check the log file - Info Level';
  }
  @Get('error')
  useErrorLog(@Query('message') message: string): string {
    if (!message) message = 'Test Message';
    console.log('?');
    throw new NotFoundException(`The board name 'abc' invalid board`);
    return 'Check the log file - Error Level';
  }

  @Get('warn')
  useWarnLog(@Query('message') message: string): string {
    if (!message) message = 'Test Message';

    console.warn(message);
    return 'Check the log file - Warn Level';
  }

  @Get('debug')
  useDebugLog(@Query('message') message: string): string {
    if (!message) message = 'Test Message';

    console.debug(message);
    return 'Check the log file - Debug Level';
  }

  // @Get('verbose')
  // useVerboseLog(@Query('message') message: string): string {
  //   if (!message) message = 'Test Message';

  //   console.verbose(message);
  //   return 'Check the log file - Verbose Level';
  // }
}
