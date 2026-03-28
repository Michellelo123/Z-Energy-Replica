import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "./loginApp.js";

describe("POST /login", () => {
  it("should login successfully with correct credentials", async () => {
    const response = await request(app).post("/login").send({
      email: "test@test.com",
      password: "password123",
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        message: "Login successful",
        email: "test@test.com",
      })
    );
  });

  it("should return 404 if user not found", async () => {
    const response = await request(app).post("/login").send({
      email: "nobody@test.com",
      password: "password123",
    });
    expect(response.status).toBe(404);
    expect(response.body).toEqual(
      expect.objectContaining({ message: "User not found" })
    );
  });

  it("should return 401 if password is wrong", async () => {
    const response = await request(app).post("/login").send({
      email: "test@test.com",
      password: "wrongpassword",
    });
    expect(response.status).toBe(401);
    expect(response.body).toEqual(
      expect.objectContaining({ message: "Invalid password" })
    );
  });
});