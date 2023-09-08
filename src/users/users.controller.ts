import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()

  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  
  @ApiQuery({type : 'string', description : "search by name"})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

}
