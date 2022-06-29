import { BsFillCartPlusFill } from "react-icons/bs";
import { CardProduct } from "./style.";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const Product = ({ product}) => {
  const { img, name, description, price} = product;

  const { addProductOnCart } = useContext(CartContext)

  return (
    <CardProduct>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>{description}</p>
      <span>
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </span>

      <button onClick={() => addProductOnCart(product)}>
        Adicionar <BsFillCartPlusFill />
      </button>
    </CardProduct>
  );
};

export default Product;
