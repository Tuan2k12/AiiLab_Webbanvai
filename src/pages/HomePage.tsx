import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function formatPrice(value: number) {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-16 text-white shadow-xl sm:px-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Vải quần áo cao cấp</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
            Cửa hàng vải thời trang cho áo và đầm đẹp
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200">
            Khám phá bộ sưu tập vải lanh, lụa, cát lê và tơ tằm với họa tiết phong phú. Phù hợp may áo dài, đầm, sơ mi và trang phục dạo phố.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Mua ngay
            </Link>
            <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Liên hệ đặt hàng
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-[#e8ded0] bg-white/75 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Danh mục nổi bật</h2>
          <p className="mt-3 text-slate-600">
            Chọn vải theo chất liệu, màu sắc và phong cách. Tất cả đều sẵn sàng để may trang phục theo ý muốn của bạn.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Lanh', 'Lụa', 'Cát lê', 'Tơ tằm'].map((label) => (
              <div key={label} className="rounded-3xl border border-[#e8ded0] bg-[#F7F1E8] p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Chất liệu</p>
                <p className="mt-3 text-xl font-semibold text-slate-900">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#e8ded0] bg-white/75 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Khuyến mãi nổi bật</h2>
          <p className="mt-3 text-slate-600">Miễn phí tư vấn chọn vải và phối màu cho đơn hàng đầu tiên.</p>
          <div className="mt-8 space-y-5">
            <div className="rounded-3xl bg-slate-950/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">100% vải chuẩn</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Chất lượng kiểm định</p>
            </div>
            <div className="rounded-3xl bg-slate-950/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Giao hàng nhanh</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Toàn quốc trong 2-3 ngày</p>
            </div>
            <div className="rounded-3xl bg-slate-950/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Bảo hành đổi trả</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Hỗ trợ đổi vải nếu chất lượng không đúng cam kết</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Sản phẩm bán chạy</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Sản phẩm được yêu thích</h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">
            Xem những loại vải được khách hàng ưa chuộng nhất với giá cạnh tranh và mẫu mã đa dạng.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[#e8ded0] bg-white/75 p-8 shadow-sm">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Bảng giá tham khảo</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">Giá vải chỉ từ {formatPrice(85000)} / mét</h3>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Nhận báo giá ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
