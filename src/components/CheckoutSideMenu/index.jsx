import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date:'01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        };

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
    }

    let renderCheckoutButton;
    if (context.cartProducts.length > 0) {
        renderCheckoutButton = (
            <Link to='/my-orders/last'>
                <div className='flex justify-center items-center mt-3 w-full h-10'>
                    <button 
                        className='bg-black text-white w-full py-2 rounded-lg'
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>
                </div>
            </Link>
        ); 
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black bg-white rounded-lg`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <div className='px-6 scrollable-cards flex-1'>
                {
                    context.cartProducts.map(product => (
                        <div className='my-3'>
                            <OrderCard 
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.images}
                                price={product.price}
                                handleDelete={handleDelete}
                            />
                        </div>
                    ))
                }
            </div>
            <div className='px-6 pb-4'>
                <p className='flex items-center justify-between'>
                    <span className='font-normal text-xl'>Total: </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                {renderCheckoutButton}
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }
