export class UpdateEmployeesDTO {
    readonly firstName: string;
    readonly lastName: string;
    readonly login: string;
    readonly workPhone?: string;
    readonly personalPhone?: string;
    readonly workEmail?: string;
    readonly personalEmail?: string;
    readonly businessLocation?: string;
    readonly company?: string;
    readonly role: string;
    readonly hourlyRate?: number;
}
