import {
    Entity, Column, PrimaryGeneratedColumn,
    BaseEntity, JoinTable
} from 'typeorm';

@Entity()
export class Planet extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    diameter: number;

    @Column()
    rotation_period: number;

    @Column()
    orbital_period: number;

    @Column()
    gravity: string;

    @Column()
    population: number;

    @Column()
    climate: string;

    @Column()
    terrain: string;

    @Column()
    surface_water: number;

    @Column()
    description: string;

    @Column()
    urlImage: string;
}