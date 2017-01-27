import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from "ionic-native";
import { Page3Result } from "../page3_result/page3_result.ts";

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  public eventTitle: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  ionViewDidLoad() {

      this.buttonText = "Scan";
      this.loading = false;
    }

    public scanQR() {
      this.buttonText = "Loading..";
      this.loading = true;

      BarcodeScanner.scan().then((barcodeData) => {
        if (barcodeData.cancelled) {
          console.log("User cancelled the action!");
          this.buttonText = "Scan";
          this.loading = false;
          return false;
        }
        console.log("Scanned successfully!");
        console.log(barcodeData);
        this.goToResult(barcodeData);
      }, (err) => {
        console.log(err);
      });
    }

    private goToResult(barcodeData) {
      this.navCtrl.push(Page3Result, {
        scannedText: barcodeData.text
      });
    }




}
