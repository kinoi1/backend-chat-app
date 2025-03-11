import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { getAllMessages, storeChat, getChat } from "./services/chatServices";


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
  .post("/send-chat", async ({ body }) => {
    const data = await storeChat(body);
    return data;
  })
  .post("/get-chat", async ({ body }) => {
    const data = await getChat(body);
    return data;
  })
  .listen(4000);



console.log(`🚀 Backend running at http://localhost:4000`);
