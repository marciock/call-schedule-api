import { Body, Controller, Get, Post } from '@nestjs/common';
import {User} from './shared/user';
import {UserService} from  './shared/user.service';



@Controller('users')
export class UsersController {

    constructor(private readonly userService:UserService){}

    @Post()
    async create(@Body() user:User): Promise<User>{
        return this.userService.create(user);
    }
    @Get()
    async findAll() :Promise<User[]>{
        return this.userService.getAll();
    }
}
