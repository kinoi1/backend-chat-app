-- CreateTable
CREATE TABLE "PS_Message" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "chatRoomId" INTEGER NOT NULL,
    "text" TEXT,
    "imageUrl" TEXT,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PS_Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PS_Attachment" (
    "id" SERIAL NOT NULL,
    "messageId" INTEGER NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PS_Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PS_TypingStatus" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "chatRoomId" INTEGER NOT NULL,
    "isTyping" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PS_TypingStatus_pkey" PRIMARY KEY ("id")
);
