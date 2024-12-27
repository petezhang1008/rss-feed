import 'reflect-metadata';
import { Container, interfaces } from 'inversify'
import { libs } from './lib';
import { models } from './models';
import { websiteParser } from './services/website-parser';
import { auth } from './services/auth';
import { task } from './services/task';
import { prisma } from './services/prisma';

const container = new Container({
    defaultScope: 'Singleton',
});

container.load(libs)
container.load(models)
container.load(websiteParser)
container.load(prisma)
container.load(auth)
container.load(task)

// 获取服务
function injectService<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>) {
    return container.get<T>(serviceIdentifier);
}

export {
    container,
    injectService,
};
