"use client";

import { useMemo, useState } from "react";
import FoodCard from "./FoodCard";
import FoodDetailsModal from "./FoodDetailsModal";

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


export default function HomeClient({ foods }: { foods: Food[]; }) {
  const [search, setSearch] = useState("");
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);


  const filteredFoods = useMemo(() => {
    return foods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [foods, search]);

  return (
    <>
      <div className='p-5'>
        <input
          placeholder="Enter food here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} autoFocus
          className="w-full max-w-xl mx-auto text-black block p-2 rounded border-black outline-2 mb-8"
        />


        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 mb-10 text-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              onAdd={setSelectedFood}
            />
          ))}
        </div>
        <FoodDetailsModal food={selectedFood} onClose={()=>setSelectedFood(null)}/>
      </div>
    </>
  );
}