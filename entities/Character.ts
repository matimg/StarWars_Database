import {
    Entity, Column, PrimaryGeneratedColumn,
    BaseEntity, JoinTable
} from 'typeorm';

@Entity()
export class Character extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    birth_year: string;

    @Column()
    gender: string;

    @Column()
    height: string;

    @Column()
    mass: number;

    @Column()
    hair_color: string;

    @Column()
    skin_color: string;

    @Column()
    eye_color: string;

    @Column()
    description: string;

    @Column()
    urlImage: string;

    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];

}