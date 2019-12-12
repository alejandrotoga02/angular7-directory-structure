export * from './api.service';
export * from './seo.service';

import { ApiService } from './api.service';
import { SeoService } from './seo.service';


export const servicesProviders = [
    ApiService,
    SeoService,
];