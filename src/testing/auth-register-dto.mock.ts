import { AuthRegisterDTO } from '../auth/dto/auth-register.dto ';
import { Role } from '../enums/role.enum';

export const authRegisterDTO: AuthRegisterDTO = {
  birthAt: '2000-01-01',
  email: 'teste@test.com',
  name: 'Teste test',
  password: '123456',
  role: Role.User,
};
