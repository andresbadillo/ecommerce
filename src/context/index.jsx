import { createContext, useState, useEffect } from 'react';

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

    // ShoppingCart - Order
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState(null);

    // Get Products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
      }, []);

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
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}