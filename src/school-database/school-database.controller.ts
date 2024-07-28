import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolDatabaseService } from './school-database.service';
import { CreateSchoolDatabaseDto } from './dto/create-school-database.dto';
import { UpdateSchoolDatabaseDto } from './dto/update-school-database.dto';

@Controller('school-database')
export class SchoolDatabaseController {
  constructor(private readonly schoolDatabaseService: SchoolDatabaseService) {}

  @Post()
  create(@Body() createSchoolDatabaseDto: CreateSchoolDatabaseDto) {
    return this.schoolDatabaseService.create(createSchoolDatabaseDto);
  }

  @Get()
  findAll() {
    return this.schoolDatabaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolDatabaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDatabaseDto: UpdateSchoolDatabaseDto) {
    return this.schoolDatabaseService.update(+id, updateSchoolDatabaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolDatabaseService.remove(+id);
  }
}
