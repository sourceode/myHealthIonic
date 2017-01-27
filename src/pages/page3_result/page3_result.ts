import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-page3-result',
  templateUrl: 'page3_result.html'
})
export class Page3Result {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  public eventTitle: string;




  constructor(public navCtrl: NavController, private _navParams: NavParams) {}

  ionViewDidLoad() {
    this.scannedText = this._navParams.get("scannedText");
  }
}
