import CardCart from "../CardCart"
import {HiOutlineShoppingCart } from 'react-icons/hi'

import { CartDiv, NoItem, ProductsCart } from "./style"
import { useContext } from "react"
import { CartContext } from "../../Providers/cart"

const Cart = () => {


    const { cart } = useContext(CartContext)

    return(
        <CartDiv>
            <ProductsCart>
                {cart.length > 0? 
                cart.map((itemCart) => (<li key={itemCart.id}><CardCart product={itemCart}/></li>))
                : 
                (<NoItem>
                    <h4>Carrinho vazio </h4>
                    <h4> <HiOutlineShoppingCart/> </h4>
                </NoItem>)}
            </ProductsCart>
        </CartDiv>
    )
}

export default Cart