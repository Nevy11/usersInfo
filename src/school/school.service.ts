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
    const todoing = this.schoolRepository.findOne({
      where: { id },
    });

    return todoing;
  }

  async update(id: number, createDto: CreateSchoolDto) {
    const todo = await this.schoolRepository.findOne({
      where: { id },
    });
    Object.assign(todo, createDto);
    return this.schoolRepository.save(todo);
  }

  async remove(id: number) {
    const todo = await this.schoolRepository.findOne({
      where: { id },
    });
    // return this.schoolRepository.findOneBy();
    return this.schoolRepository.remove(todo);
  }
}
