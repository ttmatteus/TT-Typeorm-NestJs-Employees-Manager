import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class ContactInfo {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true})
    phone?: string;

    @Column({ nullable: true})
    email?: string;
}