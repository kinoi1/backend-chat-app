import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello, Elysia!") // Route GET /
  .get("/api", () => ({ message: "Welcome to Elysia API" })) // Route GET /api
  .listen(3000);

console.log(`🚀 Server running at http://localhost:3000`);
 