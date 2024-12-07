// @ts-nocheck

import { PrismaClient } from '@prisma/client';

const PrismaSymbol = Symbol.for('Prisma')

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    // 在开发环境中，确保只创建一个 Prisma Client 实例
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export { prisma, PrismaSymbol };
