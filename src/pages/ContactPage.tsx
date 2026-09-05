'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Liên hệ</h1>
        <p className="mt-4 text-slate-600">Gửi thông tin cho chúng tôi để nhận báo giá hoặc tư vấn vải may mặc miễn phí.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Họ và tên</label>
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
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
            <label className="mb-2 block text-sm font-semibold text-slate-700">Tin nhắn</label>
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className="h-40 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
              placeholder="Viết yêu cầu của bạn"
            />
          </div>
          <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Gửi liên hệ
          </button>

          {submitted && (
            <p className="rounded-3xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900">Cảm ơn! Chúng tôi đã nhận được yêu cầu của bạn.</p>
          )}
        </form>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-lg font-bold uppercase tracking-[0.16em] text-slate-900">Thông tin cửa hàng</p>
          <div className="mt-6 space-y-4 text-slate-600">
            <p><strong>Địa chỉ:</strong> 73/10 Hẻm 73 Đô Đốc Long, P. Phú Thọ Hoà, TP. Hồ Chí Minh</p>
            <p><strong>Email:</strong> tot7sonliv1allison@gmail.com</p>
            <p><strong>Điện thoại:</strong> 0934044889</p>
          </div>
        </div>
      </div>
    </div>
  );
}
