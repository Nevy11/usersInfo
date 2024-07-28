import { Module } from '@nestjs/common';
import { SchoolDatabaseService } from './school-database.service';
import { SchoolDatabaseController } from './school-database.controller';

@Module({
  controllers: [SchoolDatabaseController],
  providers: [SchoolDatabaseService],
})
export class SchoolDatabaseModule {}
