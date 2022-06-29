import { useState, createContext, useEffect} from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(()=>{
        const saveProducts = JSON.parse(localStorage.getItem('cart'))
        saveProducts? 
        setCart(saveProducts)
        :
        setCart([])
    },[])


    const addProductOnCart = (product) => {
        setCart([...cart, product])
        localStorage.setItem('cart', JSON.stringify([...cart, product]))
    }

    const removeProdFromCart = (id) => {

       localStorage.clear()
       const newProductsOnSale = cart.filter((prod) => prod.id !== id)
       setCart(newProductsOnSale)
       localStorage.setItem('cart', JSON.stringify(newProductsOnSale))

    }

    return(
        <CartContext.Provider value={{cart, addProductOnCart, removeProdFromCart}}>
            {children}
        </CartContext.Provider>
    )
}