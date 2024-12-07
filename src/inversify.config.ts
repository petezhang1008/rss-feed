import 'reflect-metadata';
import { Container, interfaces } from 'inversify'
import { libs } from './lib';
import { models } from './models';
import { services } from './services';

const container = new Container({
    defaultScope: 'Singleton',
});

container.load(libs)
container.load(models)
container.load(services)

// 获取服务
function injectService<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>) {
    return container.get<T>(serviceIdentifier);
}


export {
    container,
    injectService,
};
