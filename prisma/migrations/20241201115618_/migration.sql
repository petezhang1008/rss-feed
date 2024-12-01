-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RssGenerator" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "rssUrl" TEXT,
    "link" TEXT,
    "selector" TEXT,
    "userId" TEXT,
    "lastUpdate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RssGenerator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feed" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pubDate" TIMESTAMP(3) NOT NULL,
    "creator" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExecuteTask" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "count" INTEGER NOT NULL,
    "rssGeneratorId" TEXT,
    "readed" BOOLEAN NOT NULL,
    "errorReason" TEXT,

    CONSTRAINT "ExecuteTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "RssGenerator" ADD CONSTRAINT "RssGenerator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExecuteTask" ADD CONSTRAINT "ExecuteTask_rssGeneratorId_fkey" FOREIGN KEY ("rssGeneratorId") REFERENCES "RssGenerator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
