import { AuthService } from '../auth/auth.service';
import { accessToken } from './access-token.mock';
import { tokenPayload } from './jwt-payload.mock';

export const AuthServiceMock = {
  provide: AuthService,
  useValue: {
    createToken: jest.fn().mockReturnValue({ accessToken }),
    checkToken: jest.fn().mockReturnValue(tokenPayload),
    isValidToken: jest.fn().mockReturnValue(true),
    login: jest.fn().mockResolvedValue({ accessToken }),
    forget: jest.fn().mockReturnValue(true),
    reset: jest.fn().mockResolvedValue({ accessToken }),
    register: jest.fn().mockResolvedValue({ accessToken }),
  },
};
