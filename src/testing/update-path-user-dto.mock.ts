import { Role } from '../enums/role.enum';
import { UpdatePatchUserDTO } from '../user/dto/update-patch-user.dto';

export const updatePathUserDTO: UpdatePatchUserDTO = {
  role: Role.Admin,
  // password: '123456',
};
