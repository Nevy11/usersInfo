import { Test, TestingModule } from '@nestjs/testing';
import { SchoolDatabaseService } from './school-database.service';

describe('SchoolDatabaseService', () => {
  let service: SchoolDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolDatabaseService],
    }).compile();

    service = module.get<SchoolDatabaseService>(SchoolDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
