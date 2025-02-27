import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { getAllMessages } from "./services/chatServices";


const app = new Elysia()
  .use(cors()) // Mengizinkan akses dari frontend
  .get("/", () => "Hello from Elysia API!")
  .get("/api/message", () => ({ message: "This is from Elysia API" }))
  .get("/", async () => {
    try {
      const messages = await getAllMessages();
      return { success: true, data: messages };
    } catch (error) {
      return { success: false, data: "Gagal mengambil data pesan", reason: error };
    }
  })
  .listen(4000);



console.log(`🚀 Backend running at http://localhost:4000`);
