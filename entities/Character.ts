import {
    Entity, Column, PrimaryGeneratedColumn,
    BaseEntity, JoinTable, OneToMany
} from 'typeorm';
import { Favorite } from './Favorite';

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

    @OneToMany(() => Favorite, favorite => favorite.character)
    favorite: Favorite[];
}