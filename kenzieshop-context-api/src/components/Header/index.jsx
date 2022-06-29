import { useHistory } from "react-router-dom";
import { GiGuitarHead } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { CartDiv, HeaderShop } from "./syle";
import { HiLogin } from "react-icons/hi";


import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const Header = () => {
  const history = useHistory();

  const { cart } = useContext(CartContext)

  return (
    <HeaderShop>
      <h1 onClick={() => history.push("/")}>
        Kenzie Music Shop <GiGuitarHead />
      </h1>
      <CartDiv>
        <h3 onClick={() => history.push("/cart")}>
          Carrinho <FaShoppingCart />
          {cart?.length > 0 && <span style={{color: "#F35DF3", fontSize: "17px"}}> {cart.length} !</span>}
        </h3>
        <div>
          <h3>
            <HiLogin /> log-in
          </h3>
        </div>
      </CartDiv>
    </HeaderShop>
  );
};

export default Header;
