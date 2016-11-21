import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mile-kilo',
  templateUrl: './mile-kilo.component.html',
  styleUrls: ['./mile-kilo.component.css']
})
export class MileKiloComponent implements OnInit {
// Declare number and miles to kilo variable
clickMessage: number;
milesToKilo: number = 1.69034;
kiloToMiles: number = 0.62137;
  constructor() { }

  // this method handles the click

onClickMe(myMessage: number){
  //set the message

  this.clickMessage = myMessage * this.milesToKilo;
}

onClickMe2(myMessage: number){
  //set the message
  
  this.clickMessage = myMessage * this.kiloToMiles;
}
  ngOnInit() {
  }

}
