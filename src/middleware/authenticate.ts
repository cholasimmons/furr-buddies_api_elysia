import { HttpStatusEnum } from "elysia-http-status-code/status";
import { Role, User } from "src/generated/prisma";


// Assume your Better Auth setup makes the 'user' object available on the context,
// and it has a 'role' property (e.g., 'admin', 'editor', 'member').
// For demonstration, let's define a simple user type:
interface AuthenticatedUser {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'user'; // Example roles
  // ... other user properties
}

// A type for the context that includes our 'user'
type ContextWithUser = {
  user: User | null;
  set: { status: number | string; headers: Record<string, string> };
};

/**
 * Creates an onBeforeHandle hook function to check user roles.
 * @param requiredRoles A single role string or an array of role strings.
 * @returns An onBeforeHandle hook function.
 */
export function authorize(requiredRoles: string | string[]) {
  const rolesArray = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];

  return async ({ user, set }: ContextWithUser) => {
    // 1. Check if user is logged in at all
    if (!user) {
      set.status = 401; // Unauthorized
      return "Unauthorized: Please log in.";
    }

    // Safety role check
    if (!user.role) {
      set.status = HttpStatusEnum.HTTP_403_FORBIDDEN; 
      return "Forbidden: A User role is required";
    }

    // 2. Check if the user has any of the required roles
    if (!rolesArray.includes(user.role)) {
      set.status = 403; // Forbidden
      return `Forbidden: You do not have permission to access this resource.`;
    }

    // If both checks pass, do nothing, and the request will proceed to the route handler
  };
}



// Check user roles for Admin
export const checkIsAdmin = async ({ user, status }:any) => {
  const roles = user?.roles ?? [];

  if(!user || !roles.some((role:any) => [Role.ADMIN].includes(role))) {
    // set.status = httpStatus.HTTP_403_FORBIDDEN;
    return status(403, 'Access denied. Insufficient privileges');
  }
}

export const checkIsUser = async ({ user, status, set, httpStatus }:any) => {
  const roles = user?.roles ?? [];

  if(!user || !roles.some((role:any) => [Role.USER].includes(role))) {
    set.status = httpStatus.HTTP_403_FORBIDDEN;
    return status(403, 'Only a User can access this page.');
  }
}
