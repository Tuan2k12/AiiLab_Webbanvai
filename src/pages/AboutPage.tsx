export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Giới thiệu</h1>
        <p className="mt-4 max-w-4xl text-slate-600 leading-relaxed">
          Chào mừng quý khách đến với <span className="font-semibold text-slate-900">Hồng Vân (HV)</span> — nơi khởi nguồn của những chất liệu thượng hạng và tôn vinh vẻ đẹp sang trọng qua từng thớ vải.
        </p>
        <p className="mt-4 max-w-4xl text-slate-600 leading-relaxed">
          Trong thế giới thời trang cao cấp, một trang phục hoàn hảo không chỉ dừng lại ở đường kim mũi chỉ, mà cốt lõi nằm ở linh hồn của chất liệu. Tại Hồng Vân, chúng tôi tin rằng mỗi xấp vải mang trong mình một câu chuyện riêng — câu chuyện về sự tỉ mỉ, gu thẩm mỹ tinh tế và đẳng cấp không dành cho số đông.
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
