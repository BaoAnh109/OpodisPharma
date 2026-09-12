import phytobebe from "@/assets/images/products/phytobebe.webp";
import phytogyno from "@/assets/images/products/phytogyno.webp";
import mosquitoBaby from "@/assets/images/products/mosquito-baby.webp";
import clincare from "@/assets/images/products/clincare.webp";
import opodex70 from "@/assets/images/products/opodex-70.webp";
import phytogynoDaily from "@/assets/images/products/phytogyno-daily.webp";
import phytogynoMom from "@/assets/images/products/catalog/phytogyno-mom.webp";
import phytamin from "@/assets/images/products/catalog/phytamin.webp";
import clincareSh from "@/assets/images/products/catalog/clincare-sh.webp";
import phytasep from "@/assets/images/products/catalog/phytasep.webp";
import clincare4 from "@/assets/images/products/catalog/clincare-4.webp";
import clincare2 from "@/assets/images/products/catalog/clincare-2.webp";
import clinhandsGel from "@/assets/images/products/catalog/clinhands-gel.webp";
import clinsoap from "@/assets/images/products/catalog/clinsoap.webp";
import opflu from "@/assets/images/products/catalog/opflu.webp";
import opolux from "@/assets/images/products/catalog/opolux.webp";
import phytobebePremium from "@/assets/images/products/catalog/phytobebe-premium.webp";
import phytogynoPremiumGirl from "@/assets/images/products/catalog/phytogyno-premium-for-girl.webp";
import phytogynoPremiumTeen from "@/assets/images/products/catalog/phytogyno-premium-for-teen.webp";
import phytogynoPremiumLady from "@/assets/images/products/catalog/phytogyno-premium-for-lady.webp";
import emcare from "@/assets/images/products/catalog/emcare.webp";
import tinhDauTram from "@/assets/images/products/catalog/tinh-dau-tram.webp";
import tinhDauKhuynhDiep from "@/assets/images/products/catalog/tinh-dau-khuynh-diep.webp";
import phytobebeGallery2 from "@/assets/images/products/catalog/phytobebe-gallery-2.webp";
import phytobebeGallery3 from "@/assets/images/products/catalog/phytobebe-gallery-3.webp";
import clincareShGallery from "@/assets/images/products/catalog/clincare-sh-gallery.webp";
import clinhandsGallery from "@/assets/images/products/catalog/clinhands-gallery.webp";

import type { Product } from "../types/product.types";

type CatalogProductInput = Pick<
  Product,
  "id" | "name" | "category" | "volume" | "image" | "price" | "shortDescription" | "sourceUrl"
> & Partial<Pick<Product, "gallery" | "originalPrice">>;

const createCatalogProduct = (product: CatalogProductInput): Product => ({
  ...product,
  rating: 4.8,
  reviewsCount: 0,
  soldCount: "—",
  ingredients: ["Thông tin thành phần theo công bố của nhà sản xuất."],
  benefits: ["Xem thông tin công dụng chi tiết trên website chính thức."],
  usage: "Đọc kỹ hướng dẫn sử dụng trên bao bì trước khi dùng.",
  registration: "Thông tin công bố sản phẩm theo website chính thức của Opodis Pharma.",
  warning: "Nếu có kích ứng, ngưng sử dụng và tham khảo ý kiến chuyên môn.",
});

const SCRAPED_PRODUCTS: Product[] = [
  createCatalogProduct({
    id: 892,
    name: "PHYTOGYNO MOM",
    category: "OPODIS FAMILY PREMIUM",
    volume: "Chai 50ml và 160ml",
    image: phytogynoMom,
    price: 165000,
    shortDescription:
      "Dung dịch vệ sinh dịu nhẹ theo nhu cầu đặc biệt của mẹ trong suốt thai kỳ và sau sinh.",
    sourceUrl: "https://opodispharma.com/index.php/product/phytogyno-mom/",
  }),
  createCatalogProduct({
    id: 885,
    name: "PHYTAMIN",
    category: "Chăm sóc gia đình",
    volume: "Theo quy cách trên bao bì",
    image: phytamin,
    price: 115000,
    shortDescription:
      "Dung dịch sát khuẩn từ nghệ và dầu mù u giúp kháng khuẩn, làm dịu và hỗ trợ phục hồi vết thương.",
    sourceUrl: "https://opodispharma.com/index.php/product/phytamin/",
  }),
  createCatalogProduct({
    id: 199,
    name: "CLINCARE SH",
    category: "Khử khuẩn – sát khuẩn bề mặt",
    volume: "Chai 500ml và chai 70ml",
    image: clincareSh,
    gallery: [clincareShGallery],
    price: 135000,
    shortDescription:
      "Dung dịch sát khuẩn nhanh cho tay và bề mặt vật dụng, phù hợp trong y tế, gia đình, trường học và văn phòng.",
    sourceUrl: "https://opodispharma.com/index.php/product/clincare-sh-2/",
  }),
  createCatalogProduct({
    id: 197,
    name: "PHYTASEP",
    category: "Khử khuẩn – sát khuẩn tay",
    volume: "Chai 500ml và can 5L",
    image: phytasep,
    price: 145000,
    shortDescription:
      "Dung dịch sát khuẩn tay y tế dùng cho rửa tay thường quy và rửa tay phẫu thuật, giúp bảo vệ da mềm mại.",
    sourceUrl: "https://opodispharma.com/index.php/product/phytasep/",
  }),
  createCatalogProduct({
    id: 196,
    name: "CLINCARE 4",
    category: "Khử khuẩn – sát khuẩn tay",
    volume: "Chai 100ml, 500ml và can 5L",
    image: clincare4,
    price: 125000,
    shortDescription:
      "Dung dịch sát khuẩn tay và tắm khử khuẩn toàn thân trước phẫu thuật, đạt chuẩn y tế và dịu nhẹ với da.",
    sourceUrl: "https://opodispharma.com/index.php/product/clincare-4/",
  }),
  createCatalogProduct({
    id: 195,
    name: "CLINCARE 2",
    category: "Khử khuẩn – sát khuẩn tay",
    volume: "Chai 100ml, 500ml và can 5L",
    image: clincare2,
    price: 125000,
    shortDescription:
      "Dung dịch rửa tay và tắm khử khuẩn trước phẫu thuật, chứa Chlorhexidine Gluconate 2% và Vitamin E.",
    sourceUrl: "https://opodispharma.com/index.php/product/clincare-2/",
  }),
  createCatalogProduct({
    id: 192,
    name: "CLINHANDS GEL",
    category: "Khử khuẩn – sát khuẩn tay",
    volume: "Chai 60ml, 70ml, 500ml và can 5L",
    image: clinhandsGel,
    gallery: [clinhandsGallery],
    price: 85000,
    shortDescription:
      "Gel sát khuẩn tay nhanh dùng trong y tế và sinh hoạt, giúp diệt khuẩn, kháng nấm mà không cần rửa nước.",
    sourceUrl: "https://opodispharma.com/index.php/product/clinhands-gel/",
  }),
  createCatalogProduct({
    id: 191,
    name: "CLINSOAP",
    category: "Khử khuẩn – sát khuẩn tay",
    volume: "Chai 500ml và can 5L",
    image: clinsoap,
    price: 95000,
    shortDescription:
      "Xà phòng rửa tay diệt khuẩn chứa Alpha-Terpineol và Vitamin E, làm sạch dịu nhẹ và dưỡng ẩm da tay.",
    sourceUrl: "https://opodispharma.com/index.php/product/clinsoap/",
  }),
  createCatalogProduct({
    id: 190,
    name: "OPFLU",
    category: "Chăm sóc gia đình",
    volume: "Theo quy cách trên bao bì",
    image: opflu,
    price: 105000,
    shortDescription:
      "Nước súc miệng và họng kháng khuẩn với Chlorhexidine 0,12%, Eucalyptol và Menthol.",
    sourceUrl: "https://opodispharma.com/index.php/product/opflu/",
  }),
  createCatalogProduct({
    id: 189,
    name: "OPOLUX",
    category: "Chăm sóc gia đình",
    volume: "Hộp 01 chai",
    image: opolux,
    price: 135000,
    shortDescription:
      "Dung dịch vệ sinh nam giúp làm sạch, khử mùi và bảo vệ cơ thể với chiết xuất tinh dầu tràm và thảo dược.",
    sourceUrl: "https://opodispharma.com/index.php/product/opolux/",
  }),
  createCatalogProduct({
    id: 114,
    name: "PHYTOBEBE PREMIUM",
    category: "OPODIS FAMILY PREMIUM",
    volume: "Theo quy cách trên bao bì",
    image: phytobebePremium,
    price: 175000,
    shortDescription:
      "Bọt tắm gội thảo dược cao cấp giúp làm sạch và bảo vệ làn da non nớt của trẻ sơ sinh và trẻ nhỏ.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp9/",
  }),
  createCatalogProduct({
    id: 113,
    name: "PHYTOGYNO PREMIUM FOR GIRL",
    category: "OPODIS FAMILY PREMIUM",
    volume: "Hộp 01 chai",
    image: phytogynoPremiumGirl,
    price: 185000,
    shortDescription:
      "Dung dịch vệ sinh dạng bọt dịu nhẹ dành cho bé gái từ 3 tuổi đến tuổi dậy thì, phù hợp pH sinh lý.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp8/",
  }),
  createCatalogProduct({
    id: 112,
    name: "PHYTOGYNO PREMIUM FOR TEEN",
    category: "OPODIS FAMILY PREMIUM",
    volume: "Hộp 01 chai",
    image: phytogynoPremiumTeen,
    price: 195000,
    shortDescription:
      "Dung dịch vệ sinh dạng bọt tuyết dịu nhẹ dành cho bé gái từ 9 đến 16 tuổi, giúp chăm sóc hằng ngày.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp7/",
  }),
  createCatalogProduct({
    id: 111,
    name: "PHYTOGYNO PREMIUM FOR LADY",
    category: "OPODIS FAMILY PREMIUM",
    volume: "Chai 160ml",
    image: phytogynoPremiumLady,
    price: 205000,
    shortDescription:
      "Dung dịch vệ sinh cao cấp cho phụ nữ hiện đại, kết hợp thảo dược và acid lactic giúp làm sạch, khử mùi và dưỡng ẩm.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp6/",
  }),
  createCatalogProduct({
    id: 108,
    name: "DẦU TRÀM EMCARE",
    category: "Tinh dầu",
    volume: "Chai 25ml và 30ml",
    image: emcare,
    price: 95000,
    shortDescription:
      "Dầu tràm thiên nhiên cho mẹ và bé, giúp giữ ấm, phòng ngừa cảm cúm và hỗ trợ kháng khuẩn.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp3/",
  }),
  createCatalogProduct({
    id: 107,
    name: "TINH DẦU TRÀM THIÊN ẤN",
    category: "Tinh dầu",
    volume: "Chai 30ml",
    image: tinhDauTram,
    price: 105000,
    shortDescription:
      "Tinh dầu tràm thiên nhiên dành cho mẹ và bé, hỗ trợ giữ ấm và bảo vệ sức khỏe an toàn.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp2/",
  }),
  createCatalogProduct({
    id: 44,
    name: "TINH DẦU KHUYNH DIỆP THIÊN ẤN",
    category: "Tinh dầu",
    volume: "Chai 30ml",
    image: tinhDauKhuynhDiep,
    price: 105000,
    shortDescription:
      "Tinh dầu khuynh diệp thiên nhiên dành cho mẹ và bé, giàu Eucalyptol và Alpha-Terpineol.",
    sourceUrl: "https://opodispharma.com/index.php/product/sp1/",
  }),
];

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
    gallery: [phytobebeGallery2, phytobebeGallery3],
    price: 120000,
    originalPrice: 150000,
    rating: 4.9,
    reviewsCount: 142,
    soldCount: "1.2k",
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
    rating: 5.0,
    reviewsCount: 198,
    soldCount: "2.5k",
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
    originalPrice: 125000,
    rating: 4.8,
    reviewsCount: 86,
    soldCount: "850",
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
    rating: 4.9,
    reviewsCount: 235,
    soldCount: "3.1k",
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
    originalPrice: 160000,
    rating: 4.9,
    reviewsCount: 112,
    soldCount: "1.8k",
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
    rating: 4.8,
    reviewsCount: 79,
    soldCount: "640",
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
  ...SCRAPED_PRODUCTS,
];
