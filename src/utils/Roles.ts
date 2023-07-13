export const hasMultipleRoles = (roles: any): boolean => {
  if (typeof roles === "string") {
    return false; // El usuario tiene solo un rol (no es más que "User")
  } else {
    return  roles.length > 1; // El usuario tiene más de un rol
  }
};
