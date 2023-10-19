import { v2 as cloudinary } from 'cloudinary';
import { getCldOgImageUrl } from 'next-cloudinary';
import { Metadata } from 'next';

import Container from '@/components/Container';
import CldImage from '@/components/CldImage';
import Button from '@/components/Button';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export async function generateMetadata({ params }: { params: { productId: string } }) {
  // @ts-ignore
  const product = await cloudinary.api.resource_by_asset_id(params.productId, { context: true });
  const { alt, caption } = product.context?.custom || {};

  const publicId = product.public_id;
  const headline = caption;
  const body = alt;

  return {
    openGraph: {
      images: [
        getCldOgImageUrl({
          src: publicId,
          effects: [{ colorize: '100,co_black' }],
          overlays: [
            {
              width: 2400,
              height: 1200,
              publicId,
              crop: 'fill',
              effects: [{
                opacity: 60
              }]
            },
            {
              width: 1400,
              crop: 'fit',
              text: {
                alignment: 'center',
                color: 'white',
                fontFamily: 'Source Sans Pro',
                fontSize: 160,
                fontWeight: 'bold',
                text: headline
              },
              position: {
                y: -100,
              },
            },
            {
              width: 1400,
              crop: 'fit',
              text: {
                alignment: 'center',
                color: 'white',
                fontFamily: 'Source Sans Pro',
                fontSize: 74,
                text: body
              },
              position: {
                y: 100,
              },
            },
          ]
        })
      ]
    }
  }
}

async function Product({ params }: { params: { productId: string } }) {
  // @ts-ignore
  const product = await cloudinary.api.resource_by_asset_id(params.productId, { context: true });
  const { alt, caption } = product.context?.custom || {};
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <CldImage
          width={800}
          height={800}
          crop="fill"
          src={product.public_id}
          alt={''}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{ caption }</h1>
        <p className="text-lg mb-6">{ alt }</p>
        <p><Button color="blue">Buy Now</Button></p>
      </div>
    </Container>
  )
}

export default Product;
