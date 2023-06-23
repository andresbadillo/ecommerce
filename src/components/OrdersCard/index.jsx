import { ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;

    const currentDate = () => {
        let date = new Date().toISOString().slice(0, 10);
        return date
     }

    return (
        <div className='flex justify-between items-center border w-80 p-4 rounded-lg mb-4 border-black'>
            <div className='flex justify-between items-center w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>{currentDate()}</span>
                    <div className='flex items-center gap-2'>
                        <ShoppingBagIcon className='h-4 w-4 text-black cursor-pointer'/>
                        <span>{totalProducts} articles</span>
                    </div>
                </p>
                <div className='flex items-center gap-2'>
                    <span className='font-medium text-xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}

export { OrdersCard }