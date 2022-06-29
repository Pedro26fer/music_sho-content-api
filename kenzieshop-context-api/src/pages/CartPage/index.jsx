import Cart from "../../components/Cart"
import FinishBuy from "../../components/FinishBuy"
import Header from "../../components/Header"
import { Content } from "./style"

function CartPage(){

    return(
        <>
            <Header/>
            <Content>
                <Cart/>
                <FinishBuy/>
            </Content>
        </>
    )
}

export default CartPage