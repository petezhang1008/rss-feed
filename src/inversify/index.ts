import { models } from '@/models';
import { container } from '../inversify.config'
import { services } from '@/services';

container.load(models);
container.load(services)