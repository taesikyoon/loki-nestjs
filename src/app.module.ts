import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentModule } from './environment/environment.module';
import { JobPostingModule } from './job-posting/job-posting.module';
import { DatabaseModule } from './database/database.module';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';

@Module({
  // Common 모듈을 import 합니다 ( 로그, ... )
  imports: [CommonModule, EnvironmentModule, JobPostingModule, DatabaseModule, CompanyModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
