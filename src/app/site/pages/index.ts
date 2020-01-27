import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';

export * from './home/home.component';
export * from './page-not-found/page-not-found.component';
export * from './about/about.component';
export * from './contact/contact.component';
export * from './post/post.component';

export const pagesDeclaration = [
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    PostComponent
];
