import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School) private schoolRepository: Repository<School>,
  ) {}
  async create(createSchoolDto: CreateSchoolDto) {
    const todo = this.schoolRepository.create(createSchoolDto);
    return await this.schoolRepository.save(todo);
  }

  findAll() {
    return this.schoolRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
