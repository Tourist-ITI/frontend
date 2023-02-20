import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent {

  @Input() card: { src:String,location: String } | any;


  @Input() tourCard: { cardImg: String, profileImg: String, price: String } | any;


}
