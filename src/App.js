import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartProvider from "./store/CartProvider";

const App = () => {

    const [displayCart, setDisplayCart] = useState(false);

    const displayCartHandler = () => {
        setDisplayCart(true);
    }

    const hideCartHandler = () => {
        setDisplayCart(false);
    }

    const cartContent = displayCart && <Cart onClose={hideCartHandler}/>;

    return (
        <CartProvider>
            {cartContent}
            <Header onDisplayCart={displayCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
