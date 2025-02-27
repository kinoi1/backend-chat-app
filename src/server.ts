import { Elysia } from "elysia";
import { getAllMessages } from "./services/chatServices";

const app = new Elysia();

// ✅ API GET untuk semua pesan
app.get("/", async () => {
  try {
    const messages = await getAllMessages();
    return { success: true, data: messages };
  } catch (error) {
    return { success: false, message: "Gagal mengambil data pesan", error };
  }
});

// ✅ API GET untuk pesan berdasarkan chatRoomId
// app.get("/messages/:chatRoomId", async ({ params }) => {
//   try {
//     const messages = await getMessagesByChatRoom(Number(params.chatRoomId));
//     return { success: true, data: messages };
//   } catch (error) {
//     return { success: false, message: "Gagal mengambil data pesan", error };
//   }
// });

// app.listen(3001, () => {
//   console.log("🚀 Server berjalan di http://localhost:3001");
// });
