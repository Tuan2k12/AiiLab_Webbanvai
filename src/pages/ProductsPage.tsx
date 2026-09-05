'use client';

import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const pageSize = 8;
const priceOptions = [
  { label: 'Mọi mức giá', value: 'all' },
  { label: 'Dưới 100.000đ', value: 'under-100' },
  { label: '100.000đ - 150.000đ', value: '100-150' },
  { label: 'Trên 150.000đ', value: 'over-150' },
];

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [fabric, setFabric] = useState('Tất cả');
  const [color, setColor] = useState('Tất cả màu');
  const [price, setPrice] = useState('all');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);

  const fabrics = useMemo(() => ['Tất cả', ...new Set(products.map((product) => product.fabric))], []);
  const colors = useMemo(() => ['Tất cả màu', ...new Set(products.map((product) => product.color))], []);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const visibleProducts = products.filter((product) => {
      const matchesQuery = !normalizedQuery || [product.name, product.fabric, product.color, product.shortDescription]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);
      const matchesFabric = fabric === 'Tất cả' || product.fabric === fabric;
      const matchesColor = color === 'Tất cả màu' || product.color === color;
      const matchesPrice = price === 'all'
        || (price === 'under-100' && product.price < 100000)
        || (price === '100-150' && product.price >= 100000 && product.price <= 150000)
        || (price === 'over-150' && product.price > 150000);

      return matchesQuery && matchesFabric && matchesColor && matchesPrice;
    });

    return [...visibleProducts].sort((first, second) => {
      if (sort === 'price-low') return first.price - second.price;
      if (sort === 'price-high') return second.price - first.price;
      if (sort === 'best-selling') return second.rating - first.rating;
      return second.id.localeCompare(first.id);
    });
  }, [color, fabric, price, query, sort]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visibleProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  function updateFilter<T>(setter: (value: T) => void, value: T) {
    setter(value);
    setPage(1);
  }

  return (
    <div className="space-y-8">
      <header className="max-w-2xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Bộ sưu tập vải</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Tất cả sản phẩm</h1>
        <p className="text-lg text-slate-600">Khám phá các loại vải chất lượng dành cho may mặc.</p>
      </header>

      <section className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6" aria-label="Bộ lọc sản phẩm">
        <div className="flex flex-col gap-4 lg:flex-row">
          <label className="relative flex-1">
            <span className="sr-only">Tìm kiếm sản phẩm</span>
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
            <input type="search" value={query} onChange={(event) => updateFilter(setQuery, event.target.value)} placeholder="Tìm kiếm vải..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-11 py-3 text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white" />
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-600">
            <span className="whitespace-nowrap">Sắp xếp:</span>
            <select value={sort} onChange={(event) => updateFilter(setSort, event.target.value)} className="bg-transparent font-semibold text-slate-900 outline-none">
              <option value="newest">Mới nhất</option>
              <option value="price-low">Giá thấp → cao</option>
              <option value="price-high">Giá cao → thấp</option>
              <option value="best-selling">Bán chạy nhất</option>
            </select>
          </label>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {fabrics.map((item) => <button key={item} type="button" onClick={() => updateFilter(setFabric, item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${fabric === item ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{item}</button>)}
        </div>

        <div className="grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            Khoảng giá
            <select value={price} onChange={(event) => updateFilter(setPrice, event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 font-normal text-slate-900 outline-none">
              {priceOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Màu sắc
            <select value={color} onChange={(event) => updateFilter(setColor, event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 font-normal text-slate-900 outline-none">
              {colors.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
      </section>

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-600">{filteredProducts.length} sản phẩm phù hợp</p>
        {(query || fabric !== 'Tất cả' || color !== 'Tất cả màu' || price !== 'all') && <button type="button" onClick={() => { setQuery(''); setFabric('Tất cả'); setColor('Tất cả màu'); setPrice('all'); setPage(1); }} className="text-sm font-semibold text-slate-900 underline underline-offset-4">Xóa bộ lọc</button>}
      </div>

      {visibleProducts.length > 0 ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-600">Không tìm thấy sản phẩm phù hợp.</div>}

      {pageCount > 1 && <nav className="flex items-center justify-center gap-2 pt-2" aria-label="Phân trang">
        <button type="button" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)} className="rounded-full px-3 py-2 text-slate-600 disabled:opacity-30">←</button>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((item) => <button key={item} type="button" onClick={() => setPage(item)} className={`h-10 w-10 rounded-full text-sm font-semibold ${currentPage === item ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{item}</button>)}
        <button type="button" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)} className="rounded-full px-3 py-2 text-slate-600 disabled:opacity-30">→</button>
      </nav>}
    </div>
  );
}