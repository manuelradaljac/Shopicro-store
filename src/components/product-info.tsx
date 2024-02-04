import { ShoppingCart } from "lucide-react";
import { Product } from "../../types";
import Button from "./ui/button";
import Currency from "./ui/currency";

interface ProductInfoProps {
  data: Product;
}
// TODO Napravit da se moze dodavat favicon svoj, svoj tab name tj. da to bude store name by default ali prilagodljivo u settingsima i da se moze svoj logo dodavat
// TODO Napravit da ide vise velicina i da ima selector za velicine
// TODO MOZDA - dodat currency selector usd, eur, bam , rsd ...

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold hover:underline text-gray-900 cursor-pointer">Gymbeam</h2>
        <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6 text-xl">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Veličina:</h3>
          <div className="">{data?.size?.value}</div>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <h3 className="font-semibold text-black">Boja:</h3>
          <div className="flex gap-2 items-center">
            <p>{data?.color?.name}</p>
            <div
              className="h-6 w-6 rounded-full border border-gray-600"
              style={{ backgroundColor: data?.color?.value }}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-5">
          Dodaj u košaricu
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
