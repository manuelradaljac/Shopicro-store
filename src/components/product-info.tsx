"use client";

import { Check, ShoppingCart, X } from "lucide-react";
import { Product } from "../../types";
import Button from "./ui/button";
import Currency from "./ui/currency";
import useCart from "../../hooks/use-cart";

interface ProductInfoProps {
  data: Product;
}
// TODO Napravit da ide vise velicina i da ima selector za velicine

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div className="">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      </div>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6 text-xl">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Dostupnost:</h3>
          <div className="flex flex-row items-center justify-evenly">
            {data?.Inventory?.map((item) => (
              <div key={item.id}>{item.isInStock ? <Check /> : <X />}</div>
            ))}
            {data?.Inventory?.map((item) => (
              <h2 key={item.id}>
                {parseInt(item.numberInStock) < 10 ? (
                  `Preostalo samo: ${item.numberInStock}`
                ) : (
                  <></>
                )}
              </h2>
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-4">
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
        <Button onClick={onAddToCart} className="flex items-center gap-x-5">
          Dodaj u košaricu
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
