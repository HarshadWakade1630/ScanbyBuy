"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CartItem, getCart, saveCart } from "@/lib/cart";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>(() => getCart());

  function updateCart(updated: CartItem[]) {
    saveCart(updated);
    setCart(updated);
  }

  function increase(id: number) {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(id: number) {
    updateCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function remove(id: number) {
    updateCart(cart.filter((item) => item.id !== id));
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = +(subtotal * 0.05).toFixed(2);
  const total = subtotal + gst;

  return (
    <main className="min-h-screen bg-gray-100 text-black px-4 py-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-4xl font-bold">
          🛒 My Cart
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white text-black p-12 text-center shadow">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some delicious food to continue.
            </p>

            <button
              onClick={() => router.replace("/")}
              className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-3 text-white"
            >
              Browse Foods
            </button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

            <div className="space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl bg-white text-black p-5 shadow sm:flex-row sm:items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={110}
                    height={110}
                    className="h-28 w-28 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-gray-500">
                      ₹{item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decrease(item.id)}
                      className="h-9 w-9 rounded-full bg-gray-200 text-black text-xl"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increase(item.id)}
                      className="h-9 w-9 rounded-full bg-orange-500 text-xl text-white"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => remove(item.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white"
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            <div className="rounded-2xl bg-white text-black p-6 shadow h-fit sticky top-24">

              <h2 className="mb-5 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>₹{gst}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <button
                className="mt-6 w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white hover:bg-green-700"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>
        )}
      </div>
    </main>
  );
}