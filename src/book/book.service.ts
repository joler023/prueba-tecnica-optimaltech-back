import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({
      data: createBookDto,
    });
  }

  findAll({ title, createdAt }: { title?: string; createdAt?: string }) {
    return this.prisma.book.findMany({
      where: {
        title: {
          contains: title,
        },
        ...(createdAt && {
          createdAt: {
            gte: new Date(createdAt),
          },
        }),
      },
    });
  }

  findOne({ id, title }: { id?: number; title?: string }) {
    return this.prisma.book.findFirst({
      where: {
        ...(id && { id }),
        ...(title && { title }),
      },
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({
      where: {
        id,
      },
      data: updateBookDto,
    });
  }

  remove(id: number) {
    return this.prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
