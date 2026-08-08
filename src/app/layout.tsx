import type { Metadata } from 'next';
import '../styles/globals.css';
import SiteLayout from '../components/SiteLayout';
import { CartProvider } from '../context/CartContext';

export const metadata: Metadata = {
  title: 'Shop Vải Quần Áo',
  description: 'Trang web bán vải quần áo với nhiều chất liệu và họa tiết.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <CartProvider>
          <SiteLayout>{children}</SiteLayout>
        </CartProvider>
      </body>
    </html>
  );
}
