import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CareerComponent } from './career/career.component';
import { TechnoComponent } from './techno/techno.component';
import { ClientsComponent } from './clients/clients.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'nav', component: NavComponent },
  {path: 'ECG-iT', component: HomeComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'career', component: CareerComponent },
  {path: 'techno', component: TechnoComponent },
  {path: 'clients', component: ClientsComponent },
  { path: '**', component: NotFoundComponent },
  {path: '',   redirectTo: './ECG-iT', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
