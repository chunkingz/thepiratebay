import { Component, OnInit } from '@angular/core';
import { ITorrent } from './../../interfaces/itorrent';
import { DataService } from '../../services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.sass'],
  providers: [DataService]
})
export class RecentComponent implements OnInit {

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  torrents: any;

  constructor(private _data: DataService, 
    private spinner: NgxSpinnerService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.spinner.show();
 
    // setTimeout(() => {
    //     this.spinner.hide();
    // }, 1000);

    this.getTorrents();

    // bs4 autohiding alert to show when copy to clipboard btn is clicked
    this._success.subscribe((message) => {
      this.successMessage = message
      // call the snackbar display function
      this.openSnackBar(this.successMessage, "Okay");
    });

    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

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

  getTorrents() {
    
    this._data.getTorrents()
      .subscribe(response => {

        setTimeout(() => {
          this.spinner.hide();
      }, 1000);
      
        this.torrents = <ITorrent[]> response;
      });
  }


}
