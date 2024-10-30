import { BadRequestException, Controller, Get, InternalServerErrorException, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name);

  // Error level log test
  @Get('error')
  logError() {
    throw new InternalServerErrorException('This is an error level log test.');
  }

  // Warning level log test
  @Get('warn')
  logWarn() {
    throw new BadRequestException('This is a warning level log test.');
  }

  // Debug level log test
  @Get('debug')
  logDebug() {
    this.logger.debug('This is a debug level log test.');
    return { message: 'Debug level log generated.' };
  }

  // Info level log test
  @Get('info')
  logInfo() {
    this.logger.log('This is an info level log test.'); // "log" corresponds to info
    return { message: 'Info level log generated.' };
  }

  // Verbose level log test
  @Get('verbose')
  logVerbose() {
    this.logger.verbose('This is a verbose level log test.');
    return { message: 'Verbose level log generated.' };
  }
}
