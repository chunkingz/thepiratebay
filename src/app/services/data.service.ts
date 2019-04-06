import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

searchTerm: string;
url = `https://tpbc.herokuapp.com`;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getTorrents();
  }

  getTorrents() {
    const torrentUrl = `${this.url}/recent/`;
    return this._http.get(torrentUrl);
  }
  getTopTorrents(x) {
    const torrentUrl = `${this.url}/top/${x}/`;
    return this._http.get(torrentUrl);
  }
  getTop48Torrents(y) {
    const torrentUrl = `${this.url}/top48h/${y}/`;
    return this._http.get(torrentUrl);
  }

  search(searchKeyword) {
    const trimmedString = searchKeyword.trim().length;
    if (trimmedString > 0) {
      const torrentUrl = `${this.url}/search/${searchKeyword}`;
      return this._http.get(torrentUrl);
    }
  }


}
