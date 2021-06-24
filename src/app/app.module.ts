import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { GreenboxComponent } from './projets/greenbox/greenbox.component';
import { CabanePourChatsComponent } from './projets/cabane-pour-chats/cabane-pour-chats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    ContactComponent,
    GreenboxComponent,
    CabanePourChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
