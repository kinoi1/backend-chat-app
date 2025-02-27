import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seedUTUser(){
  const hashedPassword = await bcrypt.hash('password123', 10); // Hash password

  await prisma.uT_User.createMany({
    data: [
      { username: 'john_doe', email: 'john@example.com', password: hashedPassword, imageProfile: 'https://i.pravatar.cc/150?img=1', status: 1 },
      { username: 'jane_doe', email: 'jane@example.com', password: hashedPassword, imageProfile: 'https://i.pravatar.cc/150?img=2', status: 0 },
      { username: 'alice', email: 'alice@example.com', password: hashedPassword, imageProfile: 'https://i.pravatar.cc/150?img=3', status: 1 },
      { username: 'bob', email: 'bob@example.com', password: hashedPassword, imageProfile: 'https://i.pravatar.cc/150?img=4', status: 0 },
    ],
  });

  console.log('Data dummy berhasil dimasukkan!');
}

async function seedPSMessage() {
  await prisma.pS_Message.createMany({
    data: [
      { senderId: 1, chatRoomId: 1, text: "Halo!", imageUrl: null },
      { senderId: 2, chatRoomId: 1, text: "Apa kabar?", imageUrl: null },
      { senderId: 3, chatRoomId: 2, text: null, imageUrl: "https://example.com/image.jpg" },
    ],
  });
  console.log("✅ Data dummy PS_Message berhasil ditambahkan!");
}


async function main() {
    await seedPSMessage();
    // Tambahkan seeder lain di sini jika ada
    // await seedUTUser(); // Jalankan PS_Message juga jika ingin seed full
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
