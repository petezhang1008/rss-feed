import { ContainerModule } from "inversify"
import prisma, { Prisma } from "./prisma"
import { HttpServer } from "./http-server.interface"
import { HttpServerImpl } from "./http-server"


export const libs = new ContainerModule((bind) => { 
    bind(Prisma).toConstantValue(prisma)
    bind(HttpServer).to(HttpServerImpl)
})