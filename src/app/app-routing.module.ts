import { Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {WritingsComponent} from './pages/writings/writings.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ArtworksComponent} from './pages/artworks/artworks.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'writings', component: WritingsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'artworks', component: ArtworksComponent},
  {path: '**', redirectTo: ''}
];
