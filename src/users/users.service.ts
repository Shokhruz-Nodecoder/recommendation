import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Model} from "mongoose"
import {InjectModel} from "@nestjs/mongoose"

@Injectable()
export class UsersService {
   constructor(@InjectModel("User") private readonly users : Model<any>){}

   async create({name,interest}: CreateUserDto) {
   const data = await this.users.create({name,interest})
   console.log(data)
   return {message : "Successfully created", data}
  }

  findAll() {
    return `This action returns all users`;
  }
  
  async findById(id: string) {
    return this.users.findById(id).exec();
  }

}
