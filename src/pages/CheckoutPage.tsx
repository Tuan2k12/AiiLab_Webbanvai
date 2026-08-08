'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

function formatPrice(value: number) {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', address: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.address) {
      return;
    }
    clearCart();
    setSubmitted(true);
    setTimeout(() => router.push('/'), 2500);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-xl font-semibold text-slate-900">Không có sản phẩm trong giỏ hàng</p>
        <p className="mt-3 text-slate-600">Vui lòng chọn ít nhất một món vải để thanh toán.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Thanh toán</h1>
        <p className="mt-2 text-slate-600">Hoàn tất đơn hàng của bạn với thông tin giao hàng chính xác.</p>
      </div>

      {submitted ? (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-emerald-900 shadow-sm">
          <h2 className="text-2xl font-semibold">Đặt hàng thành công!</h2>
          <p className="mt-3 text-slate-700">Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ lại để xác nhận và giao vải sớm nhất.</p>
          <p className="mt-4 text-sm text-slate-600">Bạn sẽ được chuyển hướng về trang chủ trong vài giây.</p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Họ và tên</label>
              <input
                value={form.fullName}
                onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                placeholder="Nhập họ tên"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                placeholder="Nhập email"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Số điện thoại</label>
              <input
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Địa chỉ giao hàng</label>
              <input
                value={form.address}
                onChange={(event) => setForm({ ...form, address: event.target.value })}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                placeholder="Nhập địa chỉ"
              />
            </div>
            <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Xác nhận đơn hàng
            </button>
          </form>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Tổng đơn hàng</p>
            <div className="mt-6 space-y-3 text-slate-700">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between gap-4 text-sm">
                  <span>{item.product.name} x {item.quantity}m</span>
                  <span>{formatPrice(item.quantity * item.product.price)}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-base font-semibold text-slate-900">
              <span>Tổng cộng</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
