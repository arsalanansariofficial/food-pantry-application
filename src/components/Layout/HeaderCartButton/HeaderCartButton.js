import CartIcon from "../../Cart/CartIcon/CartIcon";
import "./HeaderCartButton.css";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = props => {

    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((currentQuantity, item) => currentQuantity + item.quantity, 0);

    const buttonClasses = `button ${isButtonHighlighted && "bump"}`;

    useEffect(() => {
        if (cartContext.items.length === 0)
            return;
        setIsButtonHighlighted(true);

        const timer = setTimeout(() => {
            setIsButtonHighlighted(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [cartContext.items]);

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className="icon"><CartIcon/></span>
            <span>Your Cart</span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;
