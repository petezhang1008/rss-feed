import { PrismaClient } from '@prisma/client';

declare global {
    const prisma: PrismaClient | undefined; // 声明 global.prisma
}

export {};
