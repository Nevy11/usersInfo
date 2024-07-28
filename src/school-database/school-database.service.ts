import { Injectable } from '@nestjs/common';
import { CreateSchoolDatabaseDto } from './dto/create-school-database.dto';
import { UpdateSchoolDatabaseDto } from './dto/update-school-database.dto';

@Injectable()
export class SchoolDatabaseService {
  create(createSchoolDatabaseDto: CreateSchoolDatabaseDto) {
    return 'This action adds a new schoolDatabase';
  }

  findAll() {
    return `This action returns all schoolDatabase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schoolDatabase`;
  }

  update(id: number, updateSchoolDatabaseDto: UpdateSchoolDatabaseDto) {
    return `This action updates a #${id} schoolDatabase`;
  }

  remove(id: number) {
    return `This action removes a #${id} schoolDatabase`;
  }
}
