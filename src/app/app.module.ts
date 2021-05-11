import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { News2Component } from './news2/news2.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    News2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent, NewsComponent]

  bootstrap: []
  // entryComponents:[NewsComponent]

})
export class AppModule {
  constructor(private injector: Injector) {
    // const el = createCustomElement(NewsComponent, { injector });
    // customElements.define('news-widget', el);
  }
  ngDoBootstrap() {
    const el = createCustomElement(NewsComponent, { injector: this.injector });
    customElements.define('news-widget', el);
  }
}
