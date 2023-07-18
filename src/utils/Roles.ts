export const hasMultipleRoles = (roles: any): boolean => {
  if (roles === "USER") {
    return false;
  } else if (roles === "AGENT") {
    return true; // El usuario tiene solo un rol (no es más que "User")
  } else {
    return roles.length > 1; // El usuario tiene más de un rol
  }
};
