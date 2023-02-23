import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {

  constructor(private userService: UsersService) {}

  async signUp(email: string, password: string) {
    // see if email is in use
    const users = await this.userService.find(email);
    if(users.length){
      // throw error
      throw new BadRequestException('Email is already in use');
    }
    // Hash the users password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');
    console.log('salt ', salt)
    // Hash the salt and password together
    const hash = (await scrypt(password, salt, 32) as Buffer);
    // join the hash and salt together
    const encryptedPassword = salt +'.'+hash.toString('hex');
    console.log('encrypted password ',encryptedPassword)

    // Create a new user and save it
    const user = await this.userService.create(email, encryptedPassword);
    // return the user
    return user
  }

  async signIn(email: string, password: string) {
    const [ user ] = await this.userService.find(email);
    if(!user){
      throw new BadRequestException('Invalid email or password');
    }

    const [salt, dbHash ] = user.password.split('.')
    const hash = (await scrypt(password, salt, 32) as Buffer);
    if(dbHash !== hash.toString('hex')){
      throw new BadRequestException('Invalid email or password')
    }
    
    return user;
  }
}
