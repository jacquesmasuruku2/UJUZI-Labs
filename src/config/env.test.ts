import { describe, it, expect } from "vitest";
import { env } from "./env";

describe("config/env", () => {
  it("expose des URLs et rôles sous forme de chaînes non vides pour Strapi", () => {
    expect(typeof env.strapiUrl).toBe("string");
    expect(env.strapiUrl.length).toBeGreaterThan(0);
    expect(typeof env.strapiAdminRole).toBe("string");
    expect(env.strapiAdminRole.length).toBeGreaterThan(0);
  });
});
