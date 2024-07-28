import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolService.create(createSchoolDto);
  }

  @Get()
  findAll() {
    return this.schoolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.schoolService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createDto: CreateSchoolDto) {
    return this.schoolService.update(+id, createDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.schoolService.remove(id);
  }
}
