import { Component, OnInit } from '@angular/core';
import { ArrayType } from "@angular/compiler";
import { ItemComponent } from '../item/item.component';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string;
  wishlist: ItemComponent[]; 
  friends: string[];
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

  addFriend(f:string) {
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

  static Users: User[] =  [
    {
        username: "Kyra",
        wishlist: [],
        friends: [
            "Will",
            "Mom",
            "Dad",
            "Kat",
            "Alex",
            "Elizabeth",
            "Rachel",
            "Katie",
            "Kathryn",
            "Ali",
            "Abbie",
            "Jordyn",
            "Alexis",
            "Shirley"
        ],
        budget: 200,
        amount_spent: 57,
        profile_details: "All I want for Christmas is a diamond ring. And a degree."
    },
    {
        username: "Ali",
        wishlist: [],
        friends: [
            "Ryan",
            "Elizabeth",
            "Rachel",
            "Katie",
            "Kathryn",
            "Ali",
            "Abbie",
            "Jordyn"
        ],
        budget : 250,
        amount_spent : 138,
        profile_details : "All I want for Christmas is a bunch of Harry Potter swag. Merry Christmas ya filthy Muggle."
    }];

  /**
   * method that takesin a string (from a friends list of a user for example)
   * returns: a User Instance of the same name or null if it doesn't exist
   */
  static staticMethod(str:string) {
    UserComponent.Users.forEach(loopAndSearch);

  function loopAndSearch(item, index, arr) {
    if (arr[index] == str) {
      return arr[index];
    }
  }
    return null;
  }

}
