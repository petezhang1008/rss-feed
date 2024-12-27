import { ContainerModule } from "inversify"
import { LoginServiceImpl } from "./impls/login-service"
import { LoginService } from "./login-service"

export const auth = new ContainerModule((bind) => {
    bind(LoginService).to(LoginServiceImpl)
})