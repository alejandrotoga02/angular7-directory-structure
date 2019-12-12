import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleInterceptor } from './exampleInterceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi: true },
];
