import { YoutubeIDPipe } from './youtubeid.pipe';
import { SanitizeUrlPipe } from './sanitize-url.pipe';
import { SanitizeCssPipe } from './sanitize-css.pipe';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { TranslateMonthPipe } from './translateMonth.pipe';

export * from './sanitize-html.pipe';
export * from './sanitize-css.pipe';
export * from './sanitize-url.pipe';
export * from './youtubeid.pipe';
export * from './translateMonth.pipe';


export const pipesDeclarations = [
    SanitizeHtmlPipe,
    SanitizeCssPipe,
    SanitizeUrlPipe,
    YoutubeIDPipe,
    TranslateMonthPipe,
];
