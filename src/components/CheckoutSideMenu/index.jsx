import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import { OrderCard } from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete =(id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} scrollable-cards checkout-side-menu flex-col fixed right-0 border border-black bg-white rounded-lg`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <div className='px-6'>
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
        </aside>
    )
}

export { CheckoutSideMenu }
