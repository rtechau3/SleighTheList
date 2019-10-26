import { Component, OnInit } from '@angular/core';
import { ArrayType } from "@angular/compiler";
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string;
  wishlist: ItemComponent[]; 
  friends: UserComponent[];
  budget: number;
  amount_spent: number;
  profile_details: string;

  constructor(name: string, b: number, profile_deets: string) {
    this.username = name;
    this.wishlist = [];
    this.friends = [];
    this.budget = b;
    this.amount_spent = 0;
    this.profile_details = profile_deets || ""; //optional param
   }

  ngOnInit() {
  }
  
  addItemToWishlist(i:ItemComponent) {
    this.wishlist.push(i);
  }

  addFriend(f:UserComponent) {
    this.friends.push(f);
  }

  getRemainingFunds() {
    return this.budget - this.amount_spent;
  }

  claimItem(i:ItemComponent) {
    i.isClaimed = true;
  }

  buyItem(i:ItemComponent) {
    i.isBought = true;
    i.isClaimed = true;
    this.amount_spent -= i.price;
  }

  unClaimItem(i:ItemComponent) {
    i.isClaimed = false;
  }

  setBudget(x:number) {
    this.budget = x;
  }

}
