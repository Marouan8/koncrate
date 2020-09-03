import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { ShowServiceComponent } from './components/show-service/show-service.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: "", component:AcceuilComponent},
  {path:"blog", component:BlogComponent},
  {path:"blog/:slug", component: ShowPostComponent},
  {path:"services", component:ServicePageComponent},
  {path:"services/:slug", component: ShowServiceComponent},
  {path:"about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
