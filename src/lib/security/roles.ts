export const ROLES = [
  "user",
  "listener",
  "corrector",
  "moderator",
  "emergency_manager",
  "live_manager",
  "community_manager",
  "analyst",
  "compliance_manager",
  "finance_manager",
  "super_admin"
] as const;

export type Role = (typeof ROLES)[number];
export type Permission = "testimony:read_private" | "testimony:moderate" | "risk:manage" | "users:manage_roles" | "finance:read" | "analytics:read";

const rolePermissions: Record<Role, readonly Permission[]> = {
  user: [],
  listener: [],
  corrector: [],
  moderator: ["testimony:moderate"],
  emergency_manager: ["testimony:read_private", "risk:manage"],
  live_manager: [],
  community_manager: [],
  analyst: ["analytics:read"],
  compliance_manager: ["testimony:read_private"],
  finance_manager: ["finance:read"],
  super_admin: ["testimony:read_private", "testimony:moderate", "risk:manage", "users:manage_roles", "finance:read", "analytics:read"]
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return rolePermissions[role].includes(permission);
}
