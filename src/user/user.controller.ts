import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { ParamId } from 'src/decorators/param-id.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RoleGuard } from 'src/guards/role.guard';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard, RoleGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(Role.Admin)
  @UseInterceptors(LogInterceptor)
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Roles(Role.Admin)
  @Get()
  async list() {
    return this.userService.listAll();
  }

  @Roles(Role.Admin)
  @Get('/:id')
  async readOne(@ParamId() id: number) {
    console.log({ id });
    return this.userService.getById(id);
  }

  @Roles(Role.Admin)
  @Put('/:id')
  async update(@Body() data: UpdatePutUserDTO, @ParamId() id) {
    return this.userService.update(id, data);
  }

  @Roles(Role.Admin)
  @Patch('/:id')
  async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id) {
    return this.userService.updatePartial(id, data);
  }

  @Roles(Role.Admin)
  @Delete('/:id')
  async delete(@ParamId() id) {
    return this.userService.delete(id);
  }
}
