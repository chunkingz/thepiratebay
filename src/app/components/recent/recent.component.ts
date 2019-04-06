import { Component, OnInit } from '@angular/core';
import { ITorrent } from './../../interfaces/itorrent';
import { DataService } from '../../services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.sass'],
  providers: [DataService]
})
export class RecentComponent implements OnInit {
  torrents: any;

  constructor(private _data: DataService, private spinner: NgxSpinnerService) { }

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


}
