import {IsString, IsNotEmpty, IsArray, IsNumber} from "class-validator"



export class CreateContentDto {
    @IsString()
    @IsNotEmpty()
    title : string

    @IsArray()
    @IsString({each: true})
    @IsNotEmpty()
    tags : string

    @IsNumber()
    @IsNotEmpty()
    likes:number
}
