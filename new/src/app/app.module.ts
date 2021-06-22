import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MusicComponent } from './music/music.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostersComponent } from './posters/posters.component';
import { FilmsComponent } from './films/films.component';
import { ArtComponent } from './art/art.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		MusicComponent,
		AboutComponent,
		ContactComponent,
		PostersComponent,
  FilmsComponent,
  ArtComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
