import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersController} from './users.controller';
import {UserService} from './shared/user.service';
import {User,UserSchema} from './shared/user';


@Module({
    imports:[MongooseModule.forFeature([
        {
            name:User.name,
            schema:UserSchema
        }
    ])],
    providers:[UserService],
    controllers:[UsersController]
})
export class UsersModule {}
