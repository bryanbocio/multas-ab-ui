export const hasMultipleRoles = (roles: any): string => {
  if (roles === "USER") {
    return "USER"
  } else if (roles === "AGENT") {
    return "AGENT" // El usuario tiene solo un rol (no es más que "User")
  } else{
    return "ADMIN" // El usuario tiene más de un rol
  }
};
