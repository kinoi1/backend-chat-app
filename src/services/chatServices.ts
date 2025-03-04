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

export const storeChat = async () => {

}

// ✅ Fungsi untuk mengambil pesan berdasarkan chatRoomId
// export const getMessagesByChatRoom = async (chatRoomId: number) => {
//   return await prisma.pS_Message.findMany({
//     where: { chatRoomId },
//     orderBy: { sentAt: "desc" },
//   });
// };
