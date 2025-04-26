import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {WritingsComponent} from './pages/writings/writings.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ArtworksComponent} from './pages/artworks/artworks.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    NavbarComponent,
    FooterComponent,
    AppComponent,
  ],
  declarations: [
    HomeComponent,
    WritingsComponent,
    ProjectsComponent,
    ArtworksComponent,
  ],
})
export class AppModule {}
