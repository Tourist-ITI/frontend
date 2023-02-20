import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-card',
  templateUrl: './add-to-cart-card.component.html',
  styleUrls: ['./add-to-cart-card.component.css']
})
export class AddToCartCardComponent {

  @Input() card: { src: String, price: String } | any;

}
