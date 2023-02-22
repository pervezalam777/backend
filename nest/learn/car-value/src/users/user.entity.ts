import { 
  AfterInsert, 
  AfterRemove, 
  AfterUpdate, 
  Entity, 
  Column, 
  PrimaryGeneratedColumn 
} from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('user inserted: ', this.email.split('@')[0])
  }

  @AfterRemove()
  logRemove() {
    console.log('user removed: ', this.email.split('@')[0])
  }

  @AfterUpdate()
  logUpdate() {
    console.log('user updated: ', this.email.split('@')[0])
  }
}