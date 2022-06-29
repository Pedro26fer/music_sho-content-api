import { BsFillCartDashFill } from 'react-icons/bs'
import { CurrentSale } from "./style"
import { useContext } from "react"
import { CartContext } from "../../Providers/cart"

const CardCart = ({product}) => {

    const { removeProdFromCart } = useContext(CartContext)

    const {name,img,description,price,id} = product

    return(
        <CurrentSale>
            <img src={img} alt={name} />
            <div>
                <h3>{name}</h3>
                <p> {description} </p>
            </div>
            <span> {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </span>

            <button onClick={() => removeProdFromCart(id)}>Remover   <BsFillCartDashFill/> </button>

        </CurrentSale>
    )


}

export default CardCart