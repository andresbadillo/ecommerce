import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';
import { ProductDetail } from '../../components/ProductDetail';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []);

  return (
    <Layout>
      <div className='grid gap-4 grid-cols-3 w-full max-w-screen-md'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export { Home };