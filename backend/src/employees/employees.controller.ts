import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Employee} from "./employee.entity";
import {EmployeesDTO} from "./interfaces/employee.dto";
import {EmployeeService} from "./employee.service";
import {UpdateEmployeesDTO} from "./interfaces/updateEmployee.dto";

@Controller('employees')
export class EmployeesController {
    constructor(
        private employeeService: EmployeeService,
    ) {}

    @Get()
    async getAllEmployees(): Promise<Employee[]> {
        return this.employeeService.getAllEmployees();
    }

    @Get(':id')
    async getEmployee(@Param() id: string): Promise<Employee> {
        return this.employeeService.getEmployee(id);
    }

    @Post()
    async createEmployee(@Body() employee: EmployeesDTO): Promise<Employee> {
        return this.employeeService.createEmployee(employee);
    }

    @Put(':id')
    async updateEmployee(@Param() id: string, @Body() updateEmployee: UpdateEmployeesDTO): Promise<Employee> {
        return await this.employeeService.updateEmployee(id, updateEmployee);
    }

    @Delete(':id')
    async delete(@Param() id: string): Promise<Employee> {
        return await this.employeeService.delete(id);
    }

}
