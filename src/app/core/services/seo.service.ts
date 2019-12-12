import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '@env/environment';

@Injectable()
export class SeoService {

  private title =  'Site';

  constructor(
    private metaTagService: Meta,
    private titleService: Title
  ) { }

  updateSeoTags(
      config: {
      meta_title?: string,
      meta_description?: string,
      meta_keywords?: string,
      } = {}
  ) {

    this.titleService.setTitle( config.meta_title || `${this.title} | Homepage` );
    this.metaTagService.updateTag({ name: 'description', content: config.meta_description || 'Default description' });
    this.metaTagService.updateTag({ name: 'keywords', content: config.meta_keywords || 'Default description' });

  }


  updateShareMetas(
    config: {
      title?: string,
      description?: string,
      image?: string,
      route?: string
    } = {}
  ) {

    this.metaTagService.updateTag({ property: 'og:type', content: 'article' });
    this.metaTagService.updateTag({ property: 'og:site_name', content: this.title });
    this.metaTagService.updateTag({ property: 'og:title', content: config.title });
    this.metaTagService.updateTag({ property: 'og:description', content: config.description || '' });
    this.metaTagService.updateTag({ property: 'og:image', content: config.image || '' });
    this.metaTagService.updateTag({ property: 'og:url', content: config.route });

  }


}
