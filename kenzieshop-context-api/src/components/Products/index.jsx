import { useContext } from "react"
import { ProductsContext } from "../../Providers/products"
import Product from "../Product"
import { Standard } from "./style"

const Products = () => {
    const { products } = useContext(ProductsContext)

    return(
        <Standard>
            {products.map((product) => (<li key={product.id}><Product  product={product}/></li>))}            
        </Standard>
    )
}

export default Products