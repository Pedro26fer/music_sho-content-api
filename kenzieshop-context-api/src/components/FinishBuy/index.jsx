import { ResumeBuy } from "./style";
import {toast} from 'react-toastify'
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const FinishBuy = () => {
  
  const {cart} = useContext(CartContext)

  const handleBuy = () => {
    toast.error('Faça login para efetuar sua compra')
  }

  return (
    <ResumeBuy>
      <h1>Resumo do pedido</h1>
      
      <div>
        <h3>Total de produtos:</h3>
        <p>{cart.length}</p>
      </div>

      <div>
        <h3>Valor total:</h3>
        <p>
          R$  {cart
            .reduce((prev, curr) => prev + curr.price,0).toFixed(2)
            }
        </p>
      </div>
      <button onClick={() => handleBuy()}>Finalizar Pedido</button>
    </ResumeBuy>
  );
};

export default FinishBuy