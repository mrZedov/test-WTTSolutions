import {BadRequestException, Injectable, Put} from '@nestjs/common';
import {Employee} from "./employee.entity";
import {MongoRepository} from "typeorm";
import {EmployeesDTO} from "./interfaces/employee.dto";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeesRepository: MongoRepository<Employee>,
    ) {}

    async getAllEmployees(): Promise<Employee[]> {
        return await this.employeesRepository.find();
    }

    async getEmployee(id: string): Promise<Employee> {
        return await this.employeesRepository.findOne( id );
    }

    async createEmployee(employee: EmployeesDTO): Promise<Employee>{
        return await this.employeesRepository.save( this.employeesRepository.create( employee ) );
    }

    async updateEmployee(id: string, updateEmployee: EmployeesDTO): Promise<Employee> {
        const employee = await this.employeesRepository.findOne( id );
        if ( !employee ) {
            throw new BadRequestException('Employee not found');
        }
        employee.updateBasicInfo(updateEmployee);
        return await this.employeesRepository.save( employee );
    }

    async delete(id: string): Promise<Employee> {
        const employee = await this.employeesRepository.findOne( id );
        if ( !employee ) {
            throw new BadRequestException('Employee not found');
        }
        await this.employeesRepository.remove( employee );
        return employee;
    }
}
