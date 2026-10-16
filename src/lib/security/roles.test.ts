import { describe, expect, it } from "vitest";
import { hasPermission } from "./roles";

describe("role permissions", () => {
  it("does not grant private testimony access to ordinary users", () => {
    expect(hasPermission("user", "testimony:read_private")).toBe(false);
  });

  it("does not allow moderators to manage privileged roles", () => {
    expect(hasPermission("moderator", "users:manage_roles")).toBe(false);
  });

  it("allows the emergency team to manage risk cases", () => {
    expect(hasPermission("emergency_manager", "risk:manage")).toBe(true);
  });

  it("allows only explicitly privileged roles to read finance metrics", () => {
    expect(hasPermission("analyst", "finance:read")).toBe(false);
    expect(hasPermission("finance_manager", "finance:read")).toBe(true);
  });
});
