import CartItem from "../CartItem/CartItem";
import Heading from "../Heading";
import './style.scss'

const Cart = () => {
	return ( 
		<div className="cart">
			<Heading text="Корзина товаров"/>
			<div className="cart__items">
				<CartItem />
				<CartItem />
				<CartItem />
			</div>
		</div>
	);
}
 
export default Cart;