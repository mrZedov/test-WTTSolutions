import {BeforeInsert, BeforeUpdate, Column, Entity, Index, ObjectID, ObjectIdColumn} from "typeorm";
import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import { v4 } from 'uuid';
import {classToPlainFromExist} from "class-transformer";
import {EmployeesDTO} from "./interfaces/employee.dto";

export interface IEmployee {
    id?: ObjectID;
    dateAdded: Date;
    dateUpdated: Date;
    firstName: string;
    lastName: string;
    login: string;
    workPhone: string;
    personalPhone: string;
    workEmail: string;
    personalEmail: string;
    businessLocation: string;
    company: string;
    role: string;
    hourlyRate?: number;
}

@Entity()
export class Employee {

    @ObjectIdColumn()
    _id: ObjectID;

    @Index()
    @Column()
    id: string = v4();

    @Column()
    dateAdded: IEmployee['dateAdded'];

    @Column()
    dateUpdated: IEmployee['dateUpdated'];

    @Column()
    @IsNotEmpty()
    @IsString()
    firstName: IEmployee['firstName'];

    @Column()
    lastName: IEmployee['lastName'];

    @Column()
    login: IEmployee['login'];

    @Column()
    workPhone: IEmployee['workPhone'];

    @Column()
    personalPhone: IEmployee['personalPhone'];

    @Column()
    @IsEmail()
    workEmail: IEmployee['workEmail'];

    @Column()
    @IsEmail()
    personalEmail: IEmployee['personalEmail'];

    @Column()
    businessLocation: IEmployee['businessLocation'];

    @Column()
    company: IEmployee['company'];

    @Column()
    role: IEmployee['role'];

    @Column()
    hourlyRate: IEmployee['hourlyRate'];

    @BeforeInsert()
    setDefaultValue() {
        this.dateAdded = new Date();
        this.dateUpdated = new Date();
        this.hourlyRate = 90000;
    }

    @BeforeUpdate()
    updateDefaultValues() {
        this.dateUpdated = new Date();
    }

    updateBasicInfo(updateEmployee: EmployeesDTO) {
        Object.keys(classToPlainFromExist(updateEmployee, {})).forEach(k => this[k] = updateEmployee[k]);
    }
}
