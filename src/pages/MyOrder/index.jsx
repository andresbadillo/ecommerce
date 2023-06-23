import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';
import { Layout } from '../../components/Layout';
import { OrderCard } from '../../components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = context.order?.length - 1;
  console.log(context);

  return (
    <Layout>
      <div className='flex relative w-60 justify-center items-center mb-4'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map(product => (
            <div className='my-3'>
              <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            </div>
          ))
        }
      </div>
      <div className='flex w-80 mt-4'>
        <p className='flex w-full items-center justify-between'>
          <span className='font-normal text-xl'>Total: </span>
          <span className='font-medium text-2xl pr-2'>${context.order?.[index]?.totalPrice}</span>
        </p>
      </div>
    </Layout>
  )
}

export { MyOrder };