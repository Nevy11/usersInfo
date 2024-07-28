import { Test, TestingModule } from '@nestjs/testing';
import { SchoolDatabaseController } from './school-database.controller';
import { SchoolDatabaseService } from './school-database.service';

describe('SchoolDatabaseController', () => {
  let controller: SchoolDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolDatabaseController],
      providers: [SchoolDatabaseService],
    }).compile();

    controller = module.get<SchoolDatabaseController>(SchoolDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
