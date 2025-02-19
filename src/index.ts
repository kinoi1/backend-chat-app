import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors()) // Mengizinkan akses dari frontend
  .get("/", () => "Hello from Elysia API!")
  .get("/api/message", () => ({ message: "This is from Elysia API" }))
  .listen(4000);

console.log(`🚀 Backend running at http://localhost:4000`);
