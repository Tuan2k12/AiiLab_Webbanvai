'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

function formatPrice(value: number) {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export default function CartPage() {
  const { items, totalPrice, totalItems, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-xl font-semibold text-slate-900">Giỏ hàng của bạn đang trống</p>
        <p className="mt-3 text-slate-600">Thêm một vài sản phẩm để bắt đầu đặt hàng.</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Quay lại mua sắm
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Giỏ hàng</h1>
        <p className="mt-2 text-slate-600">Bạn có {totalItems} mét vải trong giỏ hàng.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.product.images[0]} alt={item.product.name} className="h-24 w-24 rounded-3xl object-cover" />
                  <div>
                    <Link href={`/product/${item.product.slug}`} className="text-lg font-semibold text-slate-900 hover:text-slate-700">
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-slate-600">{item.product.fabric} • {item.product.color}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                >
                  Xóa
                </button>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr] sm:items-center">
                <label className="flex items-center gap-3 text-sm text-slate-600">
                  Số mét
                  <input
                    type="number"
                    min={1}
                    max={item.product.stock}
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.product.id, Number(event.target.value))}
                    className="w-24 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none"
                  />
                </label>
                <p className="text-right text-base font-semibold text-slate-900">
                  {formatPrice(item.quantity * item.product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Tóm tắt đơn hàng</p>
          <div className="mt-4 space-y-3 text-slate-700">
            <div className="flex items-center justify-between text-sm">
              <span>Tổng số mét</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex items-center justify-between text-base font-semibold text-slate-900">
              <span>Tổng cộng</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Tiến hành thanh toán
          </Link>
        </div>
      </div>
    </div>
  );
}
