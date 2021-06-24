import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { CabanePourChatsComponent } from './projets/cabane-pour-chats/cabane-pour-chats.component';
import { GreenboxComponent } from './projets/greenbox/greenbox.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: '#Accueil', component: AccueilComponent },
  { path: '#Contact', component: ContactComponent },
  { path: '#Greenbox', component: GreenboxComponent },
  { path: '#Cabane_pour_chats', component: CabanePourChatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
