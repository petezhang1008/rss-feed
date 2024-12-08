import { ContainerModule } from "inversify"
import { PrismaSymbol, prisma } from "./prisma"
// import { httpClient, HttpClient } from "./http-client"


export const libs = new ContainerModule((bind) => {
    bind(PrismaSymbol).toConstantValue(prisma)
    // bind(HttpClient).toConstantValue(httpClient)
})