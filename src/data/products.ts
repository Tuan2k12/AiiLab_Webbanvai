export type Product = {
  id: string;
  slug: string;
  name: string;
  fabric: string;
  color: string;
  pattern: string;
  price: number;
  shortDescription: string;
  description: string;
  images: string[];
  stock: number;
};

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'vai-lanh-xanh-nhat',
    name: 'Vải Lanh Xanh Nhạt',
    fabric: 'Lanh',
    color: 'Xanh nhạt',
    pattern: 'Trơn',
    price: 95000,
    shortDescription: 'Vải lanh mát, phù hợp may đầm, áo sơ mi mùa hè.',
    description:
      'Vải lanh cao cấp có độ bền tốt và dễ thấm hút mồ hôi. Độ dày vừa phải, cảm giác nhẹ nhàng, thích hợp cho quần áo công sở và dạo phố.',
    images: ['/images/vai-lanh-xanh-nhat-1.jpg', '/images/vai-lanh-xanh-nhat-2.jpg'],
    stock: 20,
  },
  {
    id: 'p2',
    slug: 'vai-cat-se-trang-kem',
    name: 'Vải Cát Lê Trắng Kem',
    fabric: 'Cát Lê',
    color: 'Trắng kem',
    pattern: 'Trơn',
    price: 125000,
    shortDescription: 'Chất liệu mềm mịn, phù hợp may váy maxi và áo dài.',
    description:
      'Vải cát lê có mặt vải láng mịn, mang đến cảm giác nữ tính và sang trọng. Phù hợp với các sản phẩm may mặc cho sự kiện hoặc thời trang hàng ngày.',
    images: ['/images/vai-cat-le-trang-kem-1.jpg', '/images/vai-cat-le-trang-kem-2.jpg'],
    stock: 15,
  },
  {
    id: 'p3',
    slug: 'vai-lanh-hoa-nho',
    name: 'Vải Lanh Họa Tiết Hoa Nhỏ',
    fabric: 'Lanh',
    color: 'Be hoa',
    pattern: 'Hoa nhỏ',
    price: 98000,
    shortDescription: 'Vải lanh in hoa nhỏ, phù hợp váy xòe và áo croptop.',
    description:
      'Họa tiết hoa nhỏ tinh tế, phù hợp phong cách nhẹ nhàng. Vải thoáng mát, dễ phối đồ và may thành trang phục mùa xuân hè.',
    images: ['/images/vai-lanh-hoa-nho-1.jpg', '/images/vai-lanh-hoa-nho-2.jpg'],
    stock: 18,
  },
  {
    id: 'p4',
    slug: 'vai-lanh-den-soc-trang',
    name: 'Vải Lanh Đen Sọc Trắng',
    fabric: 'Lanh',
    color: 'Đen',
    pattern: 'Sọc trắng',
    price: 104000,
    shortDescription: 'Vải lanh dự phòng, phong cách thanh lịch cho áo vest/áo sơ mi.',
    description:
      'Vải lanh đen sọc trắng cho vẻ mạnh mẽ, sang trọng. Dễ dàng may thành trang phục công sở hoặc thời trang dạo phố.',
    images: ['/images/vai-lanh-den-soc-trang-1.jpg', '/images/vai-lanh-den-soc-trang-2.jpg'],
    stock: 12,
  },
  {
    id: 'p5',
    slug: 'vai-lua-mau-hong',
    name: 'Vải Lụa Màu Hồng',
    fabric: 'Lụa',
    color: 'Hồng',
    pattern: 'Trơn',
    price: 175000,
    shortDescription: 'Vải lụa bóng mượt, thích hợp may áo dài và đầm dạ hội.',
    description:
      'Vải lụa cao cấp với độ rủ đẹp và ánh bóng nhẹ. Đem lại vẻ sang trọng, mềm mại cho trang phục sự kiện.',
    images: ['/images/vai-lua-mau-hong-1.jpg', '/images/vai-lua-mau-hong-2.jpg'],
    stock: 10,
  },
  {
    id: 'p6',
    slug: 'vai-den-hoa-van-vang',
    name: 'Vải Đen Họa Tiết Vàng',
    fabric: 'Tơ tằm',
    color: 'Đen vàng',
    pattern: 'Hoa văn',
    price: 168000,
    shortDescription: 'Vải họa tiết đen vàng sang trọng, phù hợp may đầm và áo khoác.',
    description:
      'Vải tơ tằm với họa tiết vàng nổi bật trên nền đen. Chất liệu mềm mại, thoải mái khi mặc và phù hợp nhiều dịp.',
    images: ['/images/vai-den-hoa-van-vang-1.jpg', '/images/vai-den-hoa-van-vang-2.jpg'],
    stock: 9,
  },
];
