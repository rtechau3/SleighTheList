import { Component, OnInit } from '@angular/core';
import { ArrayType } from "@angular/compiler";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string;
  wishlist: ArrayType; 
  friends: ArrayType;
  budget: number;
  amount_spent: number;
  profile_details: string;

  constructor(name: string) {
    /*
    this.username = name;
    this.wishlist = [];
    this.friends = new ArrayType();
    this.budget = budget;
    this.amount_spent = amount_spent;
    this.profile_details = profile_details;*/
   }

  ngOnInit() {
  }

}
