import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolDatabaseDto } from './create-school-database.dto';

export class UpdateSchoolDatabaseDto extends PartialType(CreateSchoolDatabaseDto) {}
