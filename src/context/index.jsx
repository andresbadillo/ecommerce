import { createContext, useState } from 'react';

export const ShoppingCartContext =createContext();

export const ShoppingCartProvider = ({children}) => {
    // ShoppingCart - Increment auqntity
    const [count, setCount] = useState(0);

    // ProductDetail - open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // CheckoutSideMenu - open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // ProductDetail - show product
    const [productToShow, setProductToShow] = useState({});

    // ShoppingCart - add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}