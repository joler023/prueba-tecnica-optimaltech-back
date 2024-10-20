import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
    @ApiProperty({
        description: 'The title of the book',
        example: 'The Great Gatsby'
    })
    @IsString()
    @IsNotEmpty()
    title: string;
}
