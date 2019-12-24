import { ApiService } from './api.service';
import { SeoService } from './seo.service';
import { GithubService } from './github.service';

export * from './api.service';
export * from './seo.service';
export * from './github.service';

export const servicesProviders = [
    ApiService,
    SeoService,
    GithubService
];
