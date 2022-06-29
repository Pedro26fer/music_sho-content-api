import "./App.css";
import Routes from "./Routes";
import { GlobalStyle } from "./style/globalStyle.js";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ProductsProvider } from "./Providers/products";
import { CartProvider } from "./Providers/cart";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes />
        </CartProvider>
      </ProductsProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
