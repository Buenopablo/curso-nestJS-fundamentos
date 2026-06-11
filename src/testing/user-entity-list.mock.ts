import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/use.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Teste test',
    email: 'teste@test.com',
    birthAt: new Date('2000-01-01'),
    password: '$2b$10$9.S5mxCLWZyO1CvUXGJEm.sqSVGpThWOvBDXbe7anhCvzbElWyM5i',
    role: Role.User,
    id: 1,
    createdAt: new Date('2000-01-01'),
    updatedAt: new Date('2000-01-01'),
  },
  {
    name: 'Teste 1 test',
    email: 'teste1@test.com',
    birthAt: new Date('2000-02-01'),
    password: '$2b$10$9.S5mxCLWZyO1CvUXGJEm.sqSVGpThWOvBDXbe7anhCvzbElWyM5i',
    role: Role.Admin,
    id: 2,
    createdAt: new Date('2000-02-01'),
    updatedAt: new Date('2000-02-01'),
  },

  {
    name: 'Teste 2 test',
    email: 'teste2@test.com',
    birthAt: new Date('2000-03-01'),
    password: '$2b$10$9.S5mxCLWZyO1CvUXGJEm.sqSVGpThWOvBDXbe7anhCvzbElWyM5i',
    role: Role.User,
    id: 2,
    createdAt: new Date('2000-03-01'),
    updatedAt: new Date('2000-03-01'),
  },
];
