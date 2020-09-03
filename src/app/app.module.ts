import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BreadcumbComponent } from './components/breadcumb/breadcumb.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageComponent } from './components/message/message.component';
import { PostsComponent } from './components/posts/posts.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesComponent } from './components/services/services.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { ShowServiceComponent } from './components/show-service/show-service.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { RoutesRoutingModule } from './/routes-routing.module';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AboutComponent,
    BlogComponent,
    BreadcumbComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    MessageComponent,
    PostsComponent,
    ServiceComponent,
    ServicesComponent,
    ShowPostComponent,
    ShowServiceComponent,
    SlidersComponent,
    ServicePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RoutesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class AppModule { }
