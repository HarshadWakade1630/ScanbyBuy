import { addFood } from "./actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const cookieStore = await cookies();

  if (cookieStore.get("admin")?.value !== "true") {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-gray-100 text-black flex justify-center py-10 px-4">
      <form
        action={addFood}
        className="w-full max-w-md bg-white text-black rounded-xl shadow-lg p-8 space-y-4"
      >
        <h1 className="text-3xl font-bold text-center">Add Food</h1>

        <input
          name="name"
          placeholder="Food Name"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="category"
          placeholder="Category"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          className="w-full border rounded-lg p-3"
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          className="w-full border rounded-lg p-3"
          required
        />

        <textarea
          name="description"
          rows={4}
          placeholder="Description"
          className="w-full border rounded-lg p-3 resize-none"
          required
        />

        <textarea
          name="ingredients"
          rows={4}
          placeholder="Ingredients"
          className="w-full border rounded-lg p-3 resize-none"
          required
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
          Add Food
        </button>
      </form>
    </main>
  );
}
