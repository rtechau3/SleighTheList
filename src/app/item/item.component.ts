import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  name: string;
  price: number;
  isClaimed: boolean;
  isBought: boolean;
  link: string;

  constructor(myName: string, myPrice: number, myLink: string) {
    this.name = myName;
    this.price = myPrice;
    this.isClaimed = false;
    this.isBought = false;
    this.link = myLink || ""; // optional parameter
  }

  ngOnInit() {
  }

  //am item cannot claim or buy itself so this function is moving to the user class
  /*
  claim() {
    this.isClaimed = true;
  }

  buy() {
    this.isBought = true;
    this.isClaimed = true;
  }

  unClaim() {
    this.isClaimed = false;
  }
  */

}
