"use client";


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

type FoodCardProps = {
  food: Food;
  onAdd: (food: Food) => void;
};

export default function FoodCard({ food, onAdd }: FoodCardProps) {

  return (
    <>
      <div className="
group
rounded-2xl
bg-white
shadow-md
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
">
        <img
          src={food.image}
          alt={food.name}
          className="h-35 w-full object-cover"
        />

        <div className="p-4">

          <h2 className="text-lg font-bold truncate">
            {food.name}
          </h2>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {food.category}
            </p>
            <div className="mt-2 text-sm">
              ⭐ {food.rating}
            </div>
          </div>

          
            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-red-600">
                ₹{food.price} /-
              </span>

              <button
                onClick={() => onAdd(food)}
                className="rounded-lg bg-red-600 px-5 py-2 text-white font-medium hover:bg-red-700"
              >
                Add
              </button>
            </div>


        </div>
      </div>

    </>
  );
}