import { Component, OnInit } from '@angular/core';
import { ITorrent } from './../../interfaces/itorrent';
import { DataService } from '../../services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  torrents: any;
  searchTorrents: any;
  searchTerm: string;


  constructor(private _data: DataService, 
    private spinner: NgxSpinnerService, private snackBar: MatSnackBar) {

   }

  ngOnInit() {

    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
    }, 1000);

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

  search() {

    this.spinner.show();

    if(this.searchTerm.length > 0) {

      this._data.search(this.searchTerm)
      .subscribe(response => {
          
        this.searchTorrents = <ITorrent[]> response;

        setTimeout(() => {
          this.spinner.hide();
      }, 1000);

      });

    }else{
      this.spinner.hide();
    }
  }

}
