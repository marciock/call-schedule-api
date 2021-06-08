import { Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User} from './user';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel:Model<User> ){}

    async create(user:User): Promise<User>{

            const data={
                name:user.name,
                email:user.email,
                contact:user.contacts,
                active:true
            }

        const userCreated=new this.userModel(data);

        return userCreated.save();
    }

    async getAll(): Promise<User[]>{

        return await this.userModel.find().exec();
    }

    
}
