import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRegisterDTO } from './dto/auth-register.dto ';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly JWTService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async createToken(user: users) {
    return {
      accessToken: this.JWTService.sign(
        {
          id: user.id,
          name: user.name,
        },
        {
          expiresIn: '7 days',
          subject: String(user.id),
          issuer: 'login',
          audience: 'users',
        },
      ),
    };
  }

  async checkToken(token: string) {
    try {
      const data = this.JWTService.verify(token, {
        audience: 'users',
        issuer: 'login',
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email e/ou senha incorretos.');
    }

    return this.createToken(user);
  }

  async forget(email: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email está incorreto.');
    }

    // TO DO : Enviar o e-mail...
    return true;
  }

  async reset(password: string, token: string) {
    // TO DO : Validar o token....
    const id = 0;

    const user = await this.prisma.users.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });

    return this.createToken(user);
  }

  async register(data: AuthRegisterDTO) {
    const user = await this.userService.create(data);

    return this.createToken(user);
  }
}
