import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany,
    BaseEntity, JoinTable, OneToMany
} from 'typeorm';
import { Favorite } from './Favorite';

// import {Planet} from "./Planet"
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    password: string;

    @OneToMany(() => Favorite, favorite => favorite.user)
    favorite: Favorite[];

    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];

}