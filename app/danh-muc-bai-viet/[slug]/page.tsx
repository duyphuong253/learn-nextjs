import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const categoryData: Record<string, { name: string; icon: string; title: string }> = {
    "lao-hoa-lanh-manh": {
        name: "Lão hóa lành mạnh",
        icon: "❤️",
        title: "Lão hóa lành mạnh"
    },
    "suc-khoe-rang-mieng": {
        name: "Sức khỏe răng miệng",
        icon: "🦷",
        title: "Sức khỏe răng miệng"
    },
    "suc-khoe-nam-gioi": {
        name: "Sức khỏe nam giới",
        icon: "👨",
        title: "Sức khỏe nam giới"
    },
    "thoi-quen-lanh-manh": {
    name: "Thói quen lành mạnh",
    icon: "🌱",
    title: "Thói quen lành mạnh"
    },
    "cham-soc-giac-ngu": {
        name: "Chăm sóc giấc ngủ",
        icon: "⏰",
        title: "Chăm sóc giấc ngủ"
    },
    "suc-khoe": {
        name: "Sức khỏe",
        icon: "❤️",
        title: "Sức khỏe"
    },
    "suc-khoe-phu-nu": {
        name: "Sức khỏe phụ nữ",
        icon: "👩",
        title: "Sức khỏe phụ nữ"
    },
    "benh-tai-mui-hong": {
        name: "Bệnh tai mũi họng",
        icon: "👃",
        title: "Bệnh tai mũi họng"
    },
    "duoc-lieu": {
        name: "Dược liệu",
        icon: "🌿",
        title: "Dược liệu"
    },
    "thuoc-va-thuc-pham-chuc-nang": {
        name: "Thuốc và thực phẩm chức năng",
        icon: "💊",
        title: "Thuốc và thực phẩm chức năng"
    },
    "the-duc-the-thao": {
        name: "Thể dục thể thao",
        icon: "🏋️",
        title: "Thể dục thể thao"
    },
    "an-uong-lanh-manh": {
        name: "Ăn uống lành mạnh",
        icon: "🥗",
        title: "Ăn uống lành mạnh"
    },
    "benh-ve-nao-va-he-than-kinh": {
        name: "Bệnh về não và hệ thần kinh",
        icon: "🧠",
        title: "Bệnh về não và hệ thần kinh"
    },
    "benh-than-va-duong-tiet-nieu": {
        name: "Bệnh thận và Đường tiết niệu",
        icon: "🫘",
        title: "Bệnh thận và Đường tiết niệu"
    },
    "suc-khoe-mat": {
        name: "Sức khỏe mắt",
        icon: "👁️",
        title: "Sức khỏe mắt"
    },
    "benh-truyen-nhiem": {
        name: "Bệnh truyền nhiễm",
        icon: "🦠",
        title: "Bệnh truyền nhiễm"
    },
    "benh-ve-mau": {
        name: "Bệnh về máu",
        icon: "🩸",
        title: "Bệnh về máu"
    },
    "benh-co-xuong-khop": {
        name: "Bệnh cơ xương khớp",
        icon: "🦴",
        title: "Bệnh cơ xương khớp"
    },
    "di-ung": {
        name: "Dị ứng",
        icon: "🤧",
        title: "Dị ứng"
    },
    "suc-khoe-tinh-duc": {
        name: "Sức khỏe tình dục",
        icon: "💕",
        title: "Sức khỏe tình dục"
    },
    "da-lieu": {
        name: "Da liễu",
        icon: "🧴",
        title: "Da liễu"
    },
    "tam-ly-tam-than": {
        name: "Tâm lý - Tâm thần",
        icon: "🧘",
        title: "Tâm lý - Tâm thần"
    },
    "benh-tieu-hoa": {
        name: "Bệnh tiêu hóa",
        icon: "🦠",
        title: "Bệnh tiêu hóa"
    },
    "ung-thu-ung-buou": {
        name: "Ung thư - Ung bướu",
        icon: "🎗️",
        title: "Ung thư - Ung bướu"
    },
    "benh-ho-hap": {
        name: "Bệnh hô hấp",
        icon: "🫁",
        title: "Bệnh hô hấp"
    },
    "benh-tim-mach": {
        name: "Bệnh tim mạch",
        icon: "❤️",
        title: "Bệnh tim mạch"
    },
    "tieu-duong": {
        name: "Tiểu đường",
        icon: "🩸",
        title: "Tiểu đường"
    },
    "nuoi-day-con": {
        name: "Nuôi dạy con",
        icon: "👨‍👩‍👧",
        title: "Nuôi dạy con"
    },
    "mang-thai": {
        name: "Mang thai",
        icon: "🤰",
        title: "Mang thai"
    },
    };

    export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
        const { slug } = await params; 

        const category = categoryData[slug];

        if (!category) {
            return (
            <div className="text-center py-20 text-red-600">
                Danh mục không tồn tại
            </div>
            );
        }

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-emerald-600">Trang chủ</Link>
                <span>›</span>
                <Link href="/danh-muc-bai-viet" className="hover:text-emerald-600">
                Danh mục bài viết
                </Link>
                <span>›</span>
                <span className="text-emerald-700 font-medium">{category.title}</span>
            </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-8">
            {/* Header */}
            <div className="bg-white rounded-3xl p-6 flex items-center gap-5 border border-gray-100">
            <div className="w-20 h-20 flex items-center justify-center text-6xl bg-emerald-50 rounded-2xl">
                {category.icon}
            </div>
            <div>
                <h1 className="text-3xl font-bold text-emerald-700">{category.title}</h1>
                <p className="text-gray-600 mt-1">
                Khám phá các bài viết về {category.title.toLowerCase()}
                </p>
            </div>
            </div>

            {/* Danh sách bài viết */}
            <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Bài viết trong danh mục
            </h2>

            <div className="bg-white rounded-3xl p-16 text-center border border-gray-100">
                <p className="text-gray-500 text-lg">
                Không có bài viết nào.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                Chúng tôi đang cập nhật nội dung cho danh mục này.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}