import { Component, OnInit } from '@angular/core';
import { ITorrent } from './../../interfaces/itorrent';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  providers: [DataService]
})
export class NavComponent implements OnInit {
  torrents: any;
  topTorrents: any;
  top40Torrents: any;
  searchTorrents: any;
  searchTerm: string;

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  getTorrents() {
    this._data.getTorrents()
      .subscribe(
        res2 => {
        this.torrents = <ITorrent[]> res2;
      });
  }

  getTopTorrents(x) {
    this._data.getTopTorrents(x)
    .subscribe(
      res2 => {
      this.topTorrents = <ITorrent[]> res2;
    });
    }

  getTop48Torrents(y) {
    this._data.getTop48Torrents(y)
      .subscribe(res2 => {
      this.top40Torrents = <ITorrent[]> res2;
    });
  }

  search() {
      this._data.search(this.searchTerm)
        .subscribe(res2 => {
        this.searchTorrents = <ITorrent[]> res2;
      });
  }

}
