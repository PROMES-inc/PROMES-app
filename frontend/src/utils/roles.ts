export const ROLES = {
    ADMIN: "admin",
    SUPER_ADMIN: "super_admin",
  } as const;
  
  export type Role = keyof typeof ROLES;
  
  /**
   * Check if a user has a specific role.
   * @param user - The user object.
   * @param role - The role to check.
   * @returns True if the user has the role, otherwise false.
   */
  export const hasRole = (user: { role: string } | null, role: Role): boolean => {
    return user?.role === ROLES[role];
  };
  
  /**
   * Check if a user has admin access.
   * @param user - The user object.
   * @returns True if the user is an admin or super admin, otherwise false.
   */
  export const isAdmin = (user: { role: string } | null): boolean => {
    return user?.role === ROLES.ADMIN || user?.role === ROLES.SUPER_ADMIN;
  };
  
  /**
   * Check if a user has super admin access.
   * @param user - The user object.
   * @returns True if the user is a super admin, otherwise false.
   */
  export const isSuperAdmin = (user: { role: string } | null): boolean => {
    return user?.role === ROLES.SUPER_ADMIN;
  };