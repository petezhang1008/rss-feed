import { ContainerModule } from "inversify"
import { PrismaSymbol, prisma } from "./prisma"


export const libs = new ContainerModule((bind) => {
    bind(PrismaSymbol).toConstantValue(prisma)
})