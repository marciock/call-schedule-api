import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
