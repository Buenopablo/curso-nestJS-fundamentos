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
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    // console.log(body);
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
  async update(@Body() body: UpdatePutUserDTO, @Param('id', ParseIntPipe) id) {
    return {
      method: 'put',
      body,
      id,
    };
  }

  @Patch('/:id')
  async updatePartial(
    @Body() body: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return {
      method: 'patch',
      body,
      id,
    };
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id) {
    return { id };
  }
}
