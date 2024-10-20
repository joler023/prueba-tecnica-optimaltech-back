import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({
    summary: 'Create a book',
    description: 'Creates a new book with the provided title',
  })
  @Post('create')
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @ApiOperation({
    summary: 'Get all books',
    description: 'Returns all books, optionally filtering by title',
  })
  @ApiQuery({
    name: 'title',
    required: false,
    type: String,
    description: 'Filter by title',
  })
  @ApiQuery({
    name: 'createdAt',
    required: false,
    type: String,
    description: 'Filter by creation date',
  })
  @Get('all')
  findAll(@Query('title') title?: string, @Query('createdAt') createdAt?: string) {
    return this.bookService.findAll({ title, createdAt });
  }

  @ApiOperation({
    summary: 'Get a book by ID',
    description: 'Returns a book with the provided ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Update a book',
    description: 'Updates a book with the provided ID',
  })
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @ApiOperation({
    summary: 'Remove a book',
    description: 'Removes a book with the provided ID',
  })
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
