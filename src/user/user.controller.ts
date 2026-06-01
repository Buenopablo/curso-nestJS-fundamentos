import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(LogInterceptor)
  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    return this.userService.create({ email, name, password });
  }

  @Get()
  async list() {
    return this.userService.listAll();
  }

  @Get('/:id')
  async readOne(@Param('id', ParseIntPipe) id) {
    return this.userService.getById(id);
  }

  @Put('/:id')
  async update(@Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id) {
    return this.userService.update(id, data);
  }

  @Patch('/:id')
  async updatePartial(
    @Body() data: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return this.userService.updatePartial(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id) {
    return this.userService.delete(id);
  }
}
