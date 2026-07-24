import { login } from "./actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        action={login}
        className="bg-white p-8 rounded-xl shadow-lg w-[350px] space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-black">
          Admin Login
        </h1>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded text-black"
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg"
        >
          Login
        </button>

      </form>

    </main>
  );
}