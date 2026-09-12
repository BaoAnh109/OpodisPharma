import phytobebe from "@/assets/images/products/phytobebe.jpg";
import phytogyno from "@/assets/images/products/phytogyno.jpg";
import mosquitoBaby from "@/assets/images/products/mosquito-baby.svg";
import clincare from "@/assets/images/products/clincare.jpg";
import opodex70 from "@/assets/images/products/opodex-70.png";
import phytogynoDaily from "@/assets/images/products/phytogyno-daily.jpg";

import type { Product } from "../types/product.types";

/**
 * Product content is transcribed from the official Opodis Pharma product pages.
 * Prices remain illustrative because the source site does not publish a stable
 * retail price for these products.
 */
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "PHYTOBEBE",
    category: "Chăm sóc mẹ và bé",
    volume: "Chai 100ml và 250ml",
    image: phytobebe,
    price: 120000,
    originalPrice: 150000,
    shortDescription:
      "Dung dịch tắm gội thảo dược làm sạch da và tóc bé hằng ngày, hỗ trợ chăm sóc làn da nhạy cảm.",
    ingredients: [
      "Alpha-Terpineol (chiết xuất tinh dầu tràm)",
      "Cao hạt ngò (Extract Coriandrum)",
      "Cao trầu không (Extract Piper betle)",
      "Vitamin E",
      "Vitamin B5",
    ],
    benefits: [
      "Làm sạch dịu nhẹ, giúp da bé thông thoáng",
      "Hỗ trợ giảm rôm sảy, hăm và mẩn ngứa",
      "Hỗ trợ kháng khuẩn, kháng nấm và bảo vệ da",
      "Tiện lợi tắm gội 2 trong 1",
    ],
    usage:
      "Gội hoặc tắm với 2–3ml trong khoảng 1 phút rồi xả sạch. Trẻ dưới 1 tuổi có thể pha loãng 2–3ml vào chậu nước tắm.",
    registration: "Số CBMP: 03/20/CBMP-TN · Nhà máy đạt chuẩn GMP-WHO",
    warning:
      "Chỉ dùng ngoài da; tránh tiếp xúc trực tiếp với mắt và để xa tầm tay trẻ em.",
    sourceUrl: "https://opodispharma.com/index.php/product/phytobebe/",
  },
  {
    id: 2,
    name: "PHYTOGYNO",
    category: "Chăm sóc mẹ và bé",
    volume: "Chai 100ml và 250ml",
    image: phytogyno,
    price: 135000,
    shortDescription:
      "Dung dịch vệ sinh phụ khoa hằng ngày giúp làm sạch, khử mùi và hỗ trợ bảo vệ hệ vi sinh tự nhiên.",
    ingredients: ["Alpha-Terpineol 0,3g (chiết xuất tinh dầu tràm)"],
    benefits: [
      "Giúp làm sạch và khử mùi vùng kín",
      "Hỗ trợ ngăn ngừa viêm nhiễm, nấm ngứa và khí hư",
      "Duy trì độ pH tự nhiên, bảo vệ Lactobacilli",
      "Dùng được cho cả nam và nữ",
    ],
    usage:
      "Làm ướt vùng kín, dùng 1–2ml xoa nhẹ khoảng 1 phút rồi rửa lại bằng nước sạch.",
    registration: "CBMP: 1179/26/CBMP-TN",
    warning:
      "Nếu có kích ứng, ngưng sử dụng và tham khảo ý kiến bác sĩ; bảo quản nơi khô ráo, tránh nắng.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp5/",
  },
  {
    id: 3,
    name: "Xịt Xua Muỗi Baby",
    category: "Chăm sóc mẹ và bé",
    volume: "Chai 60ml",
    image: mosquitoBaby,
    price: 105000,
    shortDescription:
      "Dung dịch xua muỗi dùng cho mẹ và bé từ 6 tháng tuổi, với hoạt chất IR3535 và tinh dầu thiên nhiên.",
    ingredients: [
      "Ethyl Butylacetylaminopropionate (IR3535) 13%",
      "Chiết xuất tinh dầu tràm",
      "Sả chanh",
      "Dầu Oliu",
      "Vitamin B5",
    ],
    benefits: [
      "Xua muỗi và côn trùng trong nhiều giờ",
      "Dịu nhẹ, mùi hương không nồng gắt",
      "Phù hợp cho trẻ từ 6 tháng tuổi, phụ nữ mang thai và người lớn",
    ],
    usage:
      "Xịt lượng vừa đủ lên tay, chân, cổ hoặc quần áo ở vùng cần bảo vệ; có thể xịt lại sau 3–4 giờ hoặc khi ra nhiều mồ hôi.",
    registration: "Số CBMP: 10/17/CBMP-TN",
    warning:
      "Không xịt trực tiếp lên mặt, mắt, miệng hoặc vết thương hở; không dùng cho trẻ dưới 6 tháng tuổi.",
    sourceUrl: "https://opodispharma.com/index.php/product/xit-xua-muoi-baby/",
  },
  {
    id: 4,
    name: "CLINCARE",
    category: "Khử khuẩn – sát khuẩn tay",
    volume: "Chai 500ml và can 5L",
    image: clincare,
    price: 150000,
    shortDescription:
      "Dung dịch sát khuẩn tay nhanh dùng trong y tế, gia đình và các môi trường cần vệ sinh cao.",
    ingredients: [
      "Chlorhexidine Gluconate 0,5%",
      "Alpha-Terpineol 0,5%",
      "Ethanol 76% (v/v)",
    ],
    benefits: [
      "Hỗ trợ diệt khuẩn và khử trùng tay",
      "Kháng khuẩn, kháng nấm phổ rộng theo thông tin nhà sản xuất",
      "Nhanh khô, không cần rửa lại bằng nước",
      "Có thể dùng nhiều lần trong ngày",
    ],
    usage:
      "Lấy 3–5ml (khoảng 2 lần nhấn), xoa đều lòng bàn tay và kẽ móng tối thiểu 1 phút đến khi khô.",
    registration: "Số ĐK: VNDP-HC-119-12-12",
    warning:
      "Không được nuốt hoặc để dính vào mắt, vết thương hở; dễ cháy, bảo quản nơi khô mát dưới 35°C.",
    sourceUrl: "https://opodispharma.com/index.php/product/clincare/",
  },
  {
    id: 5,
    name: "OPODEX 70",
    category: "Khử khuẩn – sát khuẩn tay",
    volume: "Chai 500ml và can 5L",
    image: opodex70,
    price: 145000,
    shortDescription:
      "Dung dịch sát khuẩn tay chứa Ethanol 70% và Iso-propanol, dùng trong gia dụng và y tế.",
    ingredients: [
      "Ethanol 70,0% (w/w)",
      "Iso-propanol (2-Propanol) 2,0% (w/w)",
    ],
    benefits: [
      "Sát khuẩn phổ rộng theo thông tin nhà sản xuất",
      "Không cần rửa lại bằng nước",
      "Dùng cho sát khuẩn tay thường quy và ngoại khoa",
    ],
    usage:
      "Dùng để sát khuẩn tay thường quy trong gia dụng, y tế hoặc theo quy trình sát khuẩn tay ngoại khoa.",
    registration: "SĐK: VNDP-HC-037-01-21",
    warning:
      "Sản phẩm dễ cháy; bảo quản nơi thoáng mát, tránh nắng và xa nguồn nhiệt.",
    sourceUrl: "https://opodispharma.com/index.php/product/opodex-70/",
  },
  {
    id: 6,
    name: "PHYTOGYNO DAILY",
    category: "Chăm sóc mẹ và bé",
    volume: "Chai 100ml và 250ml",
    image: phytogynoDaily,
    price: 125000,
    shortDescription:
      "Dung dịch vệ sinh phụ nữ hằng ngày giúp làm sạch dịu nhẹ, dưỡng ẩm và khử mùi.",
    ingredients: [
      "Alpha-Terpineol (tinh dầu tràm thiên nhiên)",
      "Dầu Oliu",
      "Vitamin E (Tocopherol)",
      "Vitamin B5 (Panthenol)",
    ],
    benefits: [
      "Làm sạch nhẹ nhàng và duy trì độ ẩm tự nhiên",
      "Giúp cân bằng hệ vi sinh và pH vùng kín",
      "Hỗ trợ giảm mùi, dưỡng ẩm và làm mềm da",
      "Dùng được cho cả nam và nữ",
    ],
    usage:
      "Làm ướt vùng kín, cho một lượng nhỏ vào lòng bàn tay, xoa nhẹ khoảng 1 phút rồi rửa lại bằng nước sạch; dùng 1–2 lần/ngày.",
    registration: "Số CBMP: 02/25/CBMP-TN",
    warning:
      "Không dùng cho người mẫn cảm với thành phần; bảo quản nơi thoáng mát, tránh ánh nắng trực tiếp.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp4/",
  },
];
