'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Giỏ hàng', href: '/cart' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Liên hệ', href: '/contact' },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const { totalItems } = useCart();
  const pathname = usePathname();
  const cartBadge = useMemo(() => (totalItems > 0 ? ` (${totalItems})` : ''), [totalItems]);

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-[#e8ded0] bg-[#F7F1E8]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
            <img src="/images/logo.png" alt="Shop Vải Quần Áo" className="h-12 w-auto max-w-[180px] object-contain" />
          </Link>
          <nav className="flex items-center gap-4 text-sm text-stone-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-slate-900 ${pathname === item.href ? 'font-bold text-slate-900' : 'font-normal'}`}
              >
                {item.label}
                {item.href === '/cart' ? cartBadge : ''}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>

      <footer className="border-t border-[#e8ded0] bg-[#F7F1E8] py-6">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-600 sm:px-6">
          <p>© 2026 Shop Vải Quần Áo. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </div>
  );
}
