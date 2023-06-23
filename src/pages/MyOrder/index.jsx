import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { Layout } from '../../components/Layout';
import { OrderCard } from '../../components/OrderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'>
        {
          context.order?.slice(-1)[0].products.map(product => (
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
    </Layout>
  )
}

export { MyOrder };