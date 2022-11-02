export enum ROLES {
  // ADMIN = 1
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

export type User = {
  username: string;
  role: ROLES;
}

export const nicoUser: User = {
 username: 'juan-perez',
 role: ROLES.ADMIN
}
