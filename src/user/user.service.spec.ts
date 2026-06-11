import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { userRepositoryMock } from '../testing/user-repository.mock';

import { userEntityList } from '../testing/user-entity-list.mock';
import { createUserDTO } from '../testing/create-user-dto.mock';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from './entity/use.entity';
import { Repository } from 'typeorm';
import { updatePutUserDTO } from '../testing/update-put-user-dto.mock';
import { updatePathUserDTO } from '../testing/update-path-user-dto.mock';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, userRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  it('Validar a definição', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('Create', () => {
    it('method create', async () => {
      jest.spyOn(userRepository, 'exist').mockResolvedValueOnce(false);
      const result = await userService.create(createUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
  });

  describe('Read', () => {
    it('method listAll', async () => {
      const result = await userService.listAll();

      expect(result).toEqual(userEntityList);
    });
    it('method getById', async () => {
      const result = await userService.getById(1);

      expect(result).toEqual(userEntityList[0]);
    });
  });

  describe('Update', () => {
    it('method update', async () => {
      const result = await userService.update(1, updatePutUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
    it('method updatePartial', async () => {
      const result = await userService.updatePartial(1, updatePathUserDTO);

      expect(result).toEqual(userEntityList[0]);
    });
  });

  describe('Delete', () => {
    it('method delete', async () => {
      const result = await userService.delete(1);

      expect(result).toEqual(true);
    });
  });
});
