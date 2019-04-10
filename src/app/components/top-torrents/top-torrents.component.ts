import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../../services/data.service';
import { ITorrent } from '../../interfaces/itorrent';
import { NgxSpinnerService } from 'ngx-spinner';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-top-torrents',
  templateUrl: './top-torrents.component.html',
  styleUrls: ['./top-torrents.component.sass']
})
export class TopTorrentsComponent implements OnInit {

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  subscribedParam = "";
  badRoute = false;
  topTorrents: any;

  constructor(private readonly route: ActivatedRoute, 
    private _piratebay: DataService, 
    private spinner: NgxSpinnerService, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.spinner.show();

    // get the current route param by subscribing to it
    this.route.paramMap.subscribe(params => {

    // bs4 autohiding alert to show when copy to clipboard btn is clicked
    this._success.subscribe((message) => {
      this.successMessage = message
      // call the snackbar display function
      this.openSnackBar(this.successMessage, "Okay");
    });

    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    this.subscribedParam = params.get("torrent");
    this.showRoute();
      
    });

    this.checkForBadRoute();

  }

  // display snackbar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public changeSuccessMessage() {
    this._success.next('Copied to clipboard successfully.');
  }


  getTopTorrents(x) {
    this.spinner.show();

    this._piratebay.getTopTorrents(x)
    .subscribe(response => {
      
      this.topTorrents = <ITorrent[]> response;

      setTimeout(() => {
        this.spinner.hide();
    }, 1000);

    });
  }

  
  showRoute() {
    if (this.subscribedParam == 'all') {
      this.getTopTorrents(0)
    }
    if (this.subscribedParam == 'audio') {
      this.getTopTorrents(100)
    }
    if (this.subscribedParam == 'video') {
      this.getTopTorrents(200)      
    }
    if (this.subscribedParam == 'applications') {
      this.getTopTorrents(300)      
    }
    if (this.subscribedParam == 'games') {
      this.getTopTorrents(400)      
    }
    if (this.subscribedParam == '18+') {
      this.getTopTorrents(500)      
    }
    if (this.subscribedParam == 'other') {
      this.getTopTorrents(600)      
    }
  }

  checkForBadRoute() {

    if(this.subscribedParam != 'all' && this.subscribedParam != 'audio' && 
    this.subscribedParam != 'video' && this.subscribedParam != 'applications' &&
    this.subscribedParam != 'games' && this.subscribedParam != '18+' && this.subscribedParam != 'other') {

      this.badRoute = !this.badRoute;

    }
  }


}
