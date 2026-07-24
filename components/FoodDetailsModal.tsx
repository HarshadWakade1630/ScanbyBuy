"use client";

import { getCart, saveCart } from "@/lib/cart";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Food = {
    id: number;
    name: string;
    category: string;
    description: string;
    ingredients: string;
    image: string;
    slug: string;
    price: number;
    rating: number;
};

type Props = {
    food: Food | null;
    onClose: () => void;
};

export default function FoodDetailsModal({ food, onClose }: Props) {
    const router = useRouter();
    if (!food) return null;


    function handleAdd() {
        if (!food) return;

        const cart = getCart();

        const existing = cart.find((item) => item.id === food.id);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                id: food.id,
                name: food.name,
                image: food.image,
                price: food.price,
                quantity: 1,
            });
        }

        saveCart(cart);

        toast.success(`${food.name} added to cart`);
        router.push('/cart');
    }


    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Right Floating Panel */}
       <div className="fixed right-0 bottom-0 h-screen z-50 md:h-[85vh] md:w-[75vw] md:max-w-5xl bg-white shadow-2xl overflow-hidden md:rounded-tl-2xl">

                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-red-600 hover:text-white">
                    ✕
                </button>

                <div className="grid h-full grid-cols-1 md:grid-cols-2">

                    <div className="h-full md:h-full bg-black">
                        <img
                            src={food.image}
                            alt={food.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex h-full flex-col overflow-hidden">

                        <div className="flex-1 overflow-y-auto p-5 md:p-10 text-black">

                            <h1 className="text-3xl md:text-5xl font-bold">{food.name}</h1>

                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-xl text-gray-500">
                                    {food.category}
                                </p>

                                <span>⭐ {food.rating}</span>
                            </div>

                            <h2 className="mt-8 text-2xl font-semibold">
                                Description
                            </h2>

                            <p className="mt-3 text-base md:text-lg leading-7 md:leading-8">
                                {food.description}
                            </p>

                            <h2 className="mt-8 text-2xl font-semibold">
                                Ingredients
                            </h2>

                            <p className="mt-3 text-lg leading-8">
                                {food.ingredients}
                            </p>
                       
                        </div>

                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between bg-black/10 p-4 md:p-2 md:px-5">
                            <span className="text-2xl font-bold text-red-600">
                                ₹{food.price} /-
                            </span>

                            <button onClick={handleAdd} className="w-full md:w-[30%] rounded bg-red-600 py-3 text-lg md:text-xl font-bold text-white hover:bg-red-700">
                                Add to Cart
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
