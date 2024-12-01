
import { Container, interfaces } from 'inversify'

const container = new Container({
    defaultScope: 'Singleton',
    autoBindInjectable: true,
});

// 获取服务
function injectService<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>) {
    if (!serviceIdentifier || !container) return null;
    return container.get<T>(serviceIdentifier);
}


export {
    container,
    injectService,
};
