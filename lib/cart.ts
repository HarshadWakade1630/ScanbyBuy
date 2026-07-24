export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const KEY = "cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(KEY);

  return data ? JSON.parse(data) : [];
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(cart));
}