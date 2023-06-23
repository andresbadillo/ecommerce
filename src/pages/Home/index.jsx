import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';
import { ProductDetail } from '../../components/ProductDetail';

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div className='flex w-full justify-center'>Not found</div>
        )
      }
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className='flex relative w-60 justify-center items-center mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input 
        className='w-80 rounded-lg border border-black p-2 mb-4'
        type='text' 
        placeholder='Search products'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className='grid gap-4 grid-cols-3 w-full max-w-screen-md'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home };