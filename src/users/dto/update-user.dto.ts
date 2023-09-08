// import { PartialType } from '@nestjs/swagger';
// import { CreateUserDto } from './create-user.dto';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'Search by name', type: 'string' })
  name: string;
}
