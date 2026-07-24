"use client";

import Link from "next/link";
import { ShoppingCart, ShieldCheck,BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white text-black shadow-md mb-10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-bold text-red-600"
        >
          🍔 Scan Before You Buy
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">

          <Link
            href="/admin"
            className="flex items-center gap-1 text-sm sm:text-base hover:text-red-600"
          >
            <ShieldCheck size={18} />
            <span className="hidden sm:block">Admin</span>
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-1 text-sm sm:text-base hover:text-red-600"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:block">Cart</span>
          </Link>
          <Link
            href="/documentation"
            className="flex items-center gap-1 text-sm sm:text-base hover:text-red-600"
          >
            <BookOpen size={18} />
            <span className="hidden sm:block">documentation</span>
          </Link>


        </div>

      </div>
    </nav>
  );
}