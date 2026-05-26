import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ email, name, password }: CreateUserDTO) {
    const user = await this.prisma.users.create({
      data: {
        email,
        name,
        password,
      },
    });
    return user;
  }

  async listAll() {
    return this.prisma.users.findMany();
  }

  async getById(id: number) {
    return this.prisma.users.findUnique({
      where: { id },
    });
  }
}
