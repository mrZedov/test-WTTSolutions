import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { EmployeesController } from './employees/employees.controller';
import {Employee} from "./employees/employee.entity";
import { EmployeeService } from './employees/employee.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Employee,]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeeService],
})
export class AppModule {}
