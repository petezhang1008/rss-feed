import { ContainerModule } from "inversify"
import prisma, { Prisma } from "./prisma"


export const libs = new ContainerModule((bind) => { 
    bind(Prisma).toConstantValue(prisma)
})