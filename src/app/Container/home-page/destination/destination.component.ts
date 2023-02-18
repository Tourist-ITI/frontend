import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {
  
  cards = [{ src: "../../../assets/Images/home/Cairo-5.jpg", caption: "Cairo" },
  { src: "../../../assets/Images/home/alexandria-3.jpg", caption: "Alex" },
  { src: "../../../assets/Images/home/Fayoum.jpeg", caption: "Fayoum" },
  { src: "../../../assets/Images/home/Port-said.jfif", caption: "Port Said" }]

}
