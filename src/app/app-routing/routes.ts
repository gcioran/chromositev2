import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { DetailedProjectComponent } from '../detailed-project/detailed-project.component';
import { CookiePolicyComponent } from '../cookie-policy/cookie-policy.component';
import { AboutComponent} from '../about/about.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'projects',     component: ProjectsComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'about',     component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects/:projectName', component: DetailedProjectComponent },
  {path: 'cookie-policy', component: CookiePolicyComponent}
];
