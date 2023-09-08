import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import {Model} from "mongoose"
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ContentsService {
  constructor(@InjectModel("Content") private readonly contets : Model<any>){}
 async create({title, tags,likes}: CreateContentDto) {
    const data = await this.contets.create({title, tags, likes})
    return {message : "Successfully created", data}
  }

  async findAll() {
    return this.contets.find().exec();
  }

}
