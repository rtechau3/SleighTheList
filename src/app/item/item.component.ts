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

  constructor(myName: string, myPrice: number) {
    this.name = myName;
    this.price = myPrice;
    this.isClaimed = false;
    this.isBought = false;
   }

  ngOnInit() {
  }

}
