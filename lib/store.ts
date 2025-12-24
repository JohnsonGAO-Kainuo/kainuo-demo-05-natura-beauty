import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id);
    if (existingItem) {
      return {
        items: state.items.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
        isOpen: true
      };
    }
    return { items: [...state.items, { ...product, quantity: 1 }], isOpen: true };
  }),
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId)
  })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  total: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}));

