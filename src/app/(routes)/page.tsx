import Hero from "@/components/hero";
import Container from "@/components/ui/container";
import getHeroes from "../../../actions/get-heroes";
import getProducts from "../../../actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const heroes = await getHeroes("294202f2-9933-403c-827f-1b772b70fb75");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Hero data={heroes} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Istaknuti proizvodi" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
