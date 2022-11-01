enum ROLES {
  // ADMIN = 1
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  username: string;
  role: ROLES;
}

const nicoUser: User = {
 username: 'juan-perez',
 role: ROLES.ADMIN
}
