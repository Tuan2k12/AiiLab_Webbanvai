'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function formatPrice(value: number) {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export default function ProductPage({ slug }: { slug: string }) {
  const product = useMemo(() => products.find((item) => item.slug === slug), [slug]);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-lg font-semibold text-slate-900">Sản phẩm không tìm thấy</p>
        <p className="mt-3 text-slate-600">Vui lòng trở lại trang chủ để xem các sản phẩm khác.</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img src={product.images[0]} alt={product.name} className="h-[420px] w-full object-cover" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={image} alt={`${product.name} ${index + 2}`} className="h-44 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{product.fabric}</p>
            <h1 className="text-3xl font-semibold text-slate-900">{product.name}</h1>
            <p className="text-3xl font-semibold text-slate-900">{formatPrice(product.price)}</p>
          </div>
          <div className="grid gap-3 rounded-3xl bg-slate-50 p-5">
            <p className="text-sm text-slate-600">Màu sắc</p>
            <p className="text-base font-semibold text-slate-900">{product.color}</p>
            <p className="text-sm text-slate-600">Họa tiết</p>
            <p className="text-base font-semibold text-slate-900">{product.pattern}</p>
            <p className="text-sm text-slate-600">Số lượng tồn kho</p>
            <p className="text-base font-semibold text-slate-900">{product.stock} mét</p>
          </div>
          <p className="text-slate-600">{product.description}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex max-w-[140px] items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-3 py-2">
              <label htmlFor="quantity" className="sr-only">
                Số lượng
              </label>
              <input
                id="quantity"
                type="number"
                min={1}
                max={product.stock}
                value={quantity}
                onChange={(event) => setQuantity(Math.max(1, Math.min(product.stock, Number(event.target.value))))}
                className="w-full rounded-2xl border-none bg-transparent text-center text-slate-900 outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => addItem(product, quantity)}
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <p>Chú ý: Hàng vải gửi thử có thể dao động về màu sắc trên từng lô. Vui lòng liên hệ để kiểm tra tồn kho thực tế.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
