import { create } from "zustand";
import { Product } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { X } from "lucide-react";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("Ovaj proizvod je već u vašoj košarici");
        }

        set({ items: [...get().items, data] });
        toast.success("Dodano u košaricu", {
          duration: 1500
        });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Uklonjeno iz košarice");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
