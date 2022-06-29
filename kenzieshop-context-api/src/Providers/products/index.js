import { createContext, useState} from 'react'
import { productsBank } from '../../components/assets'


export const ProductsContext = createContext([])

export const ProductsProvider = ({children}) => {

    const [products] = useState(productsBank)

    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}