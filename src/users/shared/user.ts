import {Document} from 'mongoose';
import {Prop, Schema,SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class User extends Document{
    @Prop()
    name:string;
    @Prop()
    email:string;
    @Prop()
    contacts:string;
    @Prop()
    password:string;
    @Prop()
    active:boolean
}


export const UserSchema=SchemaFactory.createForClass(User);
