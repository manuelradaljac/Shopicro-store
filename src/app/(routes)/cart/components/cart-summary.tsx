import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "../../../../../hooks/use-cart";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const CartSummary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const cart = useCart();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Plaćanje uspješno!");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Nešto je pošlo po krivu");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productId: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Informacije o narudžbi
      </h2>
      <Separator />
      <div className="pt-2">
        {cart.items.map((item) => (
          <div className="flex flex-row justify-between" key={item.id}>
            <p>{item.name}</p>
            <Currency value={item.price} />
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Ukupno</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        Na naplatu
      </Button>
    </div>
  );
};

export default CartSummary;
