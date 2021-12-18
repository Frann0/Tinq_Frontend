import {PermissionDto} from "./permission.dto";
import {TokenDto} from "./token.dto";


export interface LoggedInUserDto {
  id: number;
  username: string;
  email: string;
  permissions: PermissionDto[];
  token: string;
}
