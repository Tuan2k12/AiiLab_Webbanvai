import ProductPage from '../../../pages/ProductPage';

type ProductDetailsProps = {
  params: { slug: string };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <ProductPage slug={params.slug} />;
}
