import Container from "@/components/ui/container";
import getCategory from "../../../../../actions/get-category";
import getColors from "../../../../../actions/get-colors";
import getProducts from "../../../../../actions/get-products";
import getSizes from "../../../../../actions/get-sizes";
import Hero from "@/components/hero";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  // TODO DODAT SLUGOVE - npm slug library - ruzan link sa id-om
  // TODO DODAT mogucnost mjenjanja boje teksta i mozda dodavanje samo slike
  // TODO MOZDA DODAT - mogucnost biranja vrste web shopa - prodajem svoje proizvode, zelim brendove
  // TODO DODAT mogucnost poredka za sve opcije jer se listaju po vremenu kad je stvoreno
  
  return (
    <Container>
      <Hero data={category.hero} />
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilters sizes={sizes} colors={colors} />
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" name="Veličine" data={sizes} />
            <Filter valueKey="colorId" name="Boje" data={colors} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
