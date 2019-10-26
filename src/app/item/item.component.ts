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

  isValidURL(str:string) {
    let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    }
    else {
      return false;
    }
  }

  /*
  sets the link to the item. Returns true if successful & false otherwise
  */
  setLink(x:string) {
    if (this.isValidURL(x)) {
      this.link = x;
      return true;
    }
    return false;
  }

}
