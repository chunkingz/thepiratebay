import { Component, OnInit } from '@angular/core';
import { ITorrent } from './../../interfaces/itorrent';
import { DataService } from '../../services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  torrents: any;
  searchTorrents: any;
  searchTerm: string;

  constructor(private _data: DataService, private spinner: NgxSpinnerService) { }
  
  category: Object;
  leeches: Object;
  magnet: Object;
  seeds: Object;
  size: Object;
  subcat: Object;
  time: Object;
  title: Object;
  uploader: Object;


  ngOnInit() {

    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
    }, 1000);

  }

  getTorrents() {
    this._data.getTorrents()
      .subscribe(
        res2 => {
        this.torrents = <ITorrent[]> res2;
      });
  }

  search() {
    this.spinner.show();
          
      this._data.search(this.searchTerm)
        .subscribe(res2 => {

          setTimeout(() => {
            this.spinner.hide();
        }, 1000);
          
          console.log(res2)
        this.searchTorrents = <ITorrent[]> res2;

      });
  }

}
