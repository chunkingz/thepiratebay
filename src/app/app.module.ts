import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
// import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataService } from './services/data.service';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RecentComponent } from './components/recent/recent.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSnackBarModule, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';

import { ConvertPipe } from './pipes/convert.pipe';
import { StripunsafePipe } from './pipes/stripunsafe.pipe';
import { ClipboardModule } from 'ngx-clipboard';
import { ConvertDateTimePipe } from './pipes/convert-date-time.pipe';
import { DisplayFontAwesomeIconPipe } from './pipes/display-font-awesome-icon.pipe';
import { TopTorrentsComponent } from './components/top-torrents/top-torrents.component';
import { Top40TorrentsComponent } from './components/top40-torrents/top40-torrents.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    SideBarComponent,
    RecentComponent,
    NotfoundComponent,
    ConvertPipe,
    StripunsafePipe,
    ConvertDateTimePipe,
    DisplayFontAwesomeIconPipe,
    TopTorrentsComponent,
    Top40TorrentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    GoTopButtonModule,
    ClipboardModule,
    BrowserAnimationsModule,
    MatSnackBarModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    NgbModule.forRoot()
    // ReactiveFormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
