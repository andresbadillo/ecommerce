import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import { Layout } from '../../components/Layout';
import { OrdersCard } from '../../components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex relative w-60 justify-center items-center mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export { MyOrders };