import Link from 'next/link';
import { Metadata } from 'next';
import { v2 as cloudinary } from 'cloudinary';
import { getCldOgImageUrl } from 'next-cloudinary';

import Container from '@/components/Container';
import CldImage from '@/components/CldImage';

import { CloudinaryResource } from '@/types/cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const metadata: Metadata = {
  openGraph: {
    images: [
      getCldOgImageUrl({
        src: 'my-social-images/my-store_t4rgo2'
      })
    ]
  }
}

async function Home() {
  const { resources: products } = await cloudinary.api.resources_by_tag('my-social-images', { context: true });
  return (
    <Container>
      <ul className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(products) && products.map((product: CloudinaryResource) => {
          const { alt } = product.context?.custom || {};
          return (
            <li key={product.asset_id} className="rounded overflow-hidden bg-white dark:bg-slate-700">
              <Link href={`/products/${product.asset_id}`}>
                <CldImage
                  width={800}
                  height={800}
                  crop="fill"
                  src={product.public_id}
                  alt={alt || ''}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Home;
