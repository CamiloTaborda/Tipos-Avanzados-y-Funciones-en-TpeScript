import { User, ROLES } from "./01-enum";

const currentUser: User = {
  username: 'camilo',
  role: ROLES.ADMIN
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log(rta);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log(rta2);
