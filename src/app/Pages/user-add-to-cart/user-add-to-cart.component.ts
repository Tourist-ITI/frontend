import { Component } from '@angular/core';

@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrls: ['./user-add-to-cart.component.css']
})
export class UserAddToCartComponent {


  cards = [{ src: '../../../assets/Images/Alex-card/alexandria-3.jpg', price: '2,965 EGP' },
  { src: '../../../assets/Images/Alex-card/alexandria-3.jpg', price: '2,965 EGP' },
]

}
