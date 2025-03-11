import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// ✅ Fungsi untuk mengambil semua pesan
export const getAllMessages = async () => {
    try {
    type userId = number;

    const userId  = 1;
    const result = await prisma.$queryRaw`
        SELECT 
        a."id",
        a."senderId",
        a."text",
        a."imageUrl",
        a."sentAt",
        b."username" as name
        FROM "PS_Message" as a
        LEFT JOIN "UT_User" as b ON  a."senderId" = b."id"
        WHERE a."toId" = ${userId}
    `
    return result
    } catch (error) {
        return error
    }
};

export const storeChat = async (data:any) => {
        try {
            // return {data};
            const { senderId, chatRoomId, text, imageUrl } = data[0];

            if (!senderId || !chatRoomId) {
              return { success: false, error: "senderId dan chatRoomId wajib diisi" };
            }
              
          // Simpan ke database dengan Prisma
          const newMessage = await prisma.pS_Message.create({
            data: {
              senderId,
              chatRoomId,
              text,
              imageUrl,
            },
          });
      
          return { success: true, message: newMessage };
        } catch (error) {
          console.error("Error sending message:", error);
          return { success: false, error: error };
        }
}

export const getChat = async (data:any) => {
    try{
        const {senderId, toId} = data[0];

        const result = await prisma.$queryRaw`
        SELECT * FROM (
        (SELECT 
            a."id",
            a."senderId",
            a."text",
            a."imageUrl",
            a."sentAt"
            FROM "PS_Message" as a
            WHERE a."toId" = ${toId}
            AND a."senderId" = ${senderId}
        )
        UNION ALL
        (SELECT 
            a."id",
            a."senderId",
            a."text",
            a."imageUrl",
            a."sentAt"
            FROM "PS_Message" as a
            WHERE a."toId" = ${senderId}
            AND a."senderId" = ${toId}
        )
        ) as a
        ORDER BY a."sentAt" ASC;
    `
    return result;
    } catch (error){
        return {status:false, error:error}
    }
}