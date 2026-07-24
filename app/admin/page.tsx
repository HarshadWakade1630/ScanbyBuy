import { addFood } from "./actions";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-black flex justify-center py-10 px-4">
      <form
        action={addFood}
        className="w-full max-w-md bg-white text-black rounded-xl shadow-lg p-8 space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-black">
          Add Food
        </h1>

        <input
          name="name"
          placeholder="Food Name"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          name="category"
          placeholder="Category"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          className="w-full border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <textarea
          name="ingredients"
          placeholder="Ingredients"
          rows={4}
          className="w-full border rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Add Food
        </button>
      </form>
    </main>
  );
}