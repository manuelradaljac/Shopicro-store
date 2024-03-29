import Container from "@/components/ui/container";
import getProduct from "../../../../../actions/get-product";
import getProducts from "../../../../../actions/get-products";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import ProductInfo from "@/components/product-info";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-3 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="">
              <Gallery images={product.images} />
            </div>
            <div className="mt-10 px-10 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Slični proizvodi" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
