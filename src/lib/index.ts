import { ContainerModule } from "inversify"
import prisma, { PrismaSymbol } from "./prisma"
import { HttpServer } from "./http-server.interface"
import { HttpServerImpl } from "./http-server"


export const libs = new ContainerModule((bind) => {
    bind(PrismaSymbol).toConstantValue(prisma)
    bind(HttpServer).to(HttpServerImpl)
})