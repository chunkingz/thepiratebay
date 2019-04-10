import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RecentComponent } from './components/recent/recent.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TopTorrentsComponent } from './components/top-torrents/top-torrents.component';
import { Top40TorrentsComponent } from './components/top40-torrents/top40-torrents.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'recent', component: RecentComponent},
  {path: 'top-torrents/:torrent', component: TopTorrentsComponent},
  {path: 'top-48hours-torrents/:torrent', component: Top40TorrentsComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
