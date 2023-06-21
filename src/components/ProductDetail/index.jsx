import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    console.log('PRODUCT: ', context.productToShow);

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black bg-white rounded-lg`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-[250px] rounded-lg object-cover'
                    src={context.productToShow.images[0]} 
                    alt={context.productToShow.title} 
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-xl mb-2'>{context.productToShow.title}</span>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-light text-base'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail }