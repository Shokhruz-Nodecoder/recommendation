import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, IsArray } from "class-validator"

export class CreateUserDto {
    @ApiProperty({description : "Name placeholder", type : "string", example : "Shokhruz"})
    @IsNotEmpty()
    @IsString()
    name : string

    @ApiProperty({description : "Interest placeholder", type : "string", example : "philosophy"})
    @IsNotEmpty()
    @IsArray()
    @IsString({each : true})
    interest : string

}
