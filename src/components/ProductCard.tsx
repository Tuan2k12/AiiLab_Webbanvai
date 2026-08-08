'use client';

import Link from 'next/link';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

function formatPrice(value: number) {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link href={`/product/${product.slug}`} className="block overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-3 p-5">
        <Link href={`/product/${product.slug}`} className="block text-lg font-semibold text-slate-900 hover:text-slate-700">
          {product.name}
        </Link>
        <p className="text-sm text-slate-600">{product.shortDescription}</p>
        <div className="flex items-center justify-between gap-4">
          <p className="text-base font-semibold text-slate-900">{formatPrice(product.price)}</p>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </article>
  );
}
