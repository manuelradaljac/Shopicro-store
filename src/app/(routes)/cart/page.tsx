"use client"

import Container from "@/components/ui/container";
import { useEffect, useState } from "react";
import useCart from "../../../../hooks/use-cart";
import CartItem from "./components/cart-item";
import CartSummary from "./components/cart-summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart()

  if (!isMounted) {
    return null;
  }

  return (
    <div className="">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Vaša Košarica</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
                {cart.items.length === 0 && <p className="text-neutral-600">Nemate proizvoda u vašoj košarici</p>}
                <ul>
                    {cart.items.map((item) => (
                        <CartItem key={item.id} data={item}/>
                    ))}
                </ul>
            </div>
            <CartSummary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
