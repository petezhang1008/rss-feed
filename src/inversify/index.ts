import { models } from '@/models';
import { container } from '@/inversify.config'
import { services } from '@/services';
import { libs } from '@/lib';


container.load(libs)
container.load(models);
container.load(services)