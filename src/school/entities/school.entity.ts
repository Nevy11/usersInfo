import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column()
  regNo: string;

  @Column()
  course: string;

  @Column()
  programme: string;

  @Column()
  year: number;

  @Column()
  sem: number;
}
