export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Giới thiệu</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Shop Vải Quần Áo cung cấp các loại vải thời trang dành cho may mặc, bao gồm lanh, lụa, cát lê, tơ tằm và nhiều chất liệu cao cấp khác. Chúng tôi hỗ trợ khách hàng chọn vải theo phong cách, màu sắc và nhu cầu sử dụng.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: 'Chất lượng uy tín',
            description: 'Vải được nhập khẩu và kiểm định chất lượng kỹ lưỡng trước khi đến tay khách hàng.',
          },
          {
            title: 'Tư vấn chuyên sâu',
            description: 'Đội ngũ sẵn sàng tư vấn chất liệu và cách phối màu phù hợp cho từng mẫu thiết kế.',
          },
          {
            title: 'Giao hàng toàn quốc',
            description: 'Hỗ trợ giao hàng nhanh trên toàn quốc với nhiều phương thức vận chuyển linh hoạt.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
