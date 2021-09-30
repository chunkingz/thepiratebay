import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../../services/data.service';
import { ITorrent } from '../../interfaces/itorrent';
import { NgxSpinnerService } from 'ngx-spinner';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-top40-torrents',
  templateUrl: './top40-torrents.component.html',
  styleUrls: ['./top40-torrents.component.scss']
})
export class Top40TorrentsComponent implements OnInit {

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;
 
  subscribedParam = "";
  badRoute = false;
  top48Torrents: any;

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

  getTop48Torrents(y) {
    this.spinner.show();

    this._piratebay.getTop48Torrents(y)
      .subscribe(result => {

      this.top48Torrents = <ITorrent[]> result;

      setTimeout(() => {
        this.spinner.hide();
    }, 1000);

    });
  }
  
  showRoute() {
    if (this.subscribedParam == 'all') {
      this.getTop48Torrents(0)
    }
    if (this.subscribedParam == 'audio') {
      this.getTop48Torrents(100)
    }
    if (this.subscribedParam == 'video') {
      this.getTop48Torrents(200)      
    }
    if (this.subscribedParam == 'applications') {
      this.getTop48Torrents(300)      
    }
    if (this.subscribedParam == 'games') {
      this.getTop48Torrents(400)      
    }
    if (this.subscribedParam == '18+') {
      this.getTop48Torrents(500)      
    }
    if (this.subscribedParam == 'other') {
      this.getTop48Torrents(600)      
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
