import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';

export const ROLES_KEYS = 'roles';
export const Roles = (...role: Role[]) => SetMetadata(ROLES_KEYS, role);
