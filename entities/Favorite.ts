import {
    Entity, Column, PrimaryGeneratedColumn,
    BaseEntity, JoinTable, ManyToOne
} from 'typeorm';
import { User } from './User';
import { Character } from './Character';
import { Planet } from './Planet';

@Entity()
export class Favorite extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.favorite)
    user: User;

    @ManyToOne(() => Character, character => character.favorite)
    character: Character;

    @ManyToOne(() => Planet, Planet => Planet.favorite)
    planet: Planet;
}