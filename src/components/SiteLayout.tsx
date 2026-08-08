'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useCart } from '../context/CartContext';

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giỏ hàng', href: '/cart' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Liên hệ', href: '/contact' },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const { totalItems } = useCart();
  const cartBadge = useMemo(() => (totalItems > 0 ? ` (${totalItems})` : ''), [totalItems]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
            Shop Vải Quần Áo
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-700">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
                {item.href === '/cart' ? cartBadge : ''}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600 sm:px-6">
          <p>© 2026 Shop Vải Quần Áo. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  );
}
