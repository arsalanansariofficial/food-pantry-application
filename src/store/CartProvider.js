import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalPrice = state.totalPrice + action.item.quantity * action.item.price;
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItems;
        if (existingItem) {
            const updatedItem = {...existingItem, quantity: existingItem.quantity + action.item.quantity};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = [...state.items, action.item];
        }
        return {items: updatedItems, totalPrice: updatedTotalPrice};
    }
    if (action.type === "REMOVE") {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingItemIndex];
        const updatedTotalPrice = state.totalPrice - existingItem.price;
        let updatedItems;
        if (existingItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updateItem = {...existingItem, quantity: existingItem.quantity - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updateItem;
        }
        return {items: updatedItems, totalPrice: updatedTotalPrice};
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState, () => defaultCartState);

    const addToCartHandler = item => {
        dispatchCartAction({type: "ADD", item: item});
    }

    const removeFromCart = id => {
        dispatchCartAction({type: "REMOVE", id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: (item) => addToCartHandler(item),
        removeItem: (id) => removeFromCart(id)
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
}

export default CartProvider;
