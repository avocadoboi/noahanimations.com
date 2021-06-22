import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArtComponent } from './art/art.component';
import { ContactComponent } from './contact/contact.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { PostersComponent } from './posters/posters.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'art', component: ArtComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'music', component: MusicComponent },
	{ path: 'posters', component: PostersComponent },
	{ path: 'films', component: FilmsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
