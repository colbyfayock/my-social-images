import Container from '@/components/Container';

import products from '@/data/products.json';

function Home() {
  return (
    <Container>
      <ul className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <li key={product.name} className="rounded overflow-hidden bg-white dark:bg-slate-700">
              <div className="relative">
                <img
                  width={800}
                  height={450}
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="py-4 px-5">
                <p className="mb-1 text-md font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                  { product.name }
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  <a href={product.link}>{ product.link }</a>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Home;
