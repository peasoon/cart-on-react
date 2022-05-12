import CartItem from "../CartItem/CartItem";
import Heading from "../Heading";
import './style.scss'
import { data } from './../../data.js'
import { useState } from "react";




const Cart = () => {
	const [cart, setCart] = useState(data)

	const increaseCount = (id) => {
		console.log('increase count')
		setCart(cart.map(item => {
			if (item.id === id) {
				return {
					...item,
					count: item.count+1
				}
			} else {
				return item
			}
		}))
	}

	const decreaseCount = (id) => {
		console.log('Decrease count')
		setCart(cart.map(item => {
			if (item.id === id) {
				return {
					...item,
					count: item.count===1 ? item.count : item.count-1
				}
			} else {
				return item
			}
		}))
	}

	const onChangeCount = (id, value) => {
		setCart(cart.map(item => {
			if (item.id === id) {
				return {
					...item,
					count: value
				}
			} else {
				return item
			}
		}))
	}

	const deleteItem = (id) => {
		console.log(`Item ${id} will be deleted`)
		setCart(cart.filter(item => {
			return item.id !== id
		})
		)
	}

	return ( 
		<div className="cart">
			<Heading text="Корзина товаров"/>
			<div className="cart__items">
				{cart.map(item => {
					return <CartItem data={item} 
					increaseCount={increaseCount} 
					decreaseCount={decreaseCount} 
					onChangeCount={onChangeCount}
					deleteItem={deleteItem}
					key={item.id}/>
				})
				}
			</div>
			<div className="cart__total">
				<div className="cart__total-units">Всего {
					cart.reduce((prev, item) => {
						return prev+=item.count
					},0)
				} шт.</div>
				<div className="cart__total-price">На сумму {
					cart.reduce((prev, item) => {
						return prev+=item.count*item.unitPrice
					},0)
				} руб.</div>
			</div>
		</div>
	);
}
 
export default Cart;