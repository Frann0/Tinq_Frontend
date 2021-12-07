import {PermissionDto} from "./permission.dto";
import {TokenDto} from "./token.dto";

export interface LoggedInUserDto {
  username: string;
  email: string;
  permissions: PermissionDto[];
  token: TokenDto;
}
