'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
    { name: "Lão hóa lành mạnh", icon: "❤️" },
    { name: "Sức khỏe răng miệng", icon: "🦷" },
    { name: "Sức khỏe nam giới", icon: "👨" },
    { name: "Thói quen lành mạnh", icon: "🌱" },
    { name: "Chăm sóc giấc ngủ", icon: "⏰" },
    { name: "Sức khỏe", icon: "❤️" },
    { name: "Sức khỏe phụ nữ", icon: "👩" },
    { name: "Bệnh tai mũi họng", icon: "👃" },
    { name: "Dược liệu", icon: "🌿" },
    { name: "Thuốc và thực phẩm chức năng", icon: "💊" },
    { name: "Thể dục thể thao", icon: "🏋️" },
    { name: "Ăn uống lành mạnh", icon: "🥗" },
    { name: "Bệnh về não và hệ thần kinh", icon: "🧠" },
    { name: "Bệnh thận và Đường tiết niệu", icon: "🫘" },
    { name: "Sức khỏe mắt", icon: "👁️" },
    { name: "Bệnh truyền nhiễm", icon: "🦠" },
    { name: "Bệnh về máu", icon: "🩸" },
    { name: "Bệnh cơ xương khớp", icon: "🦴" },
    { name: "Dị ứng", icon: "🤧" },
    { name: "Sức khỏe tình dục", icon: "💕" },
    { name: "Da liễu", icon: "🧴" },
    { name: "Tâm lý - Tâm thần", icon: "🧘" },
    { name: "Bệnh tiêu hóa", icon: "🦠" },
    { name: "Ung thư - Ung bướu", icon: "🎗️" },
    { name: "Bệnh hô hấp", icon: "🫁" },
    { name: "Bệnh tim mạch", icon: "❤️" },
    { name: "Tiểu đường", icon: "🩸" },
    { name: "Nuôi dạy con", icon: "👨‍👩‍👧" },
    { name: "Mang thai", icon: "🤰" },
    ];

    export default function DanhMucBaiVietPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-emerald-700 mb-3">
                Danh mục bài viết
            </h1>
            <p className="text-gray-600 text-lg">
                Khám phá các chủ đề sức khỏe và y tế được quan tâm nhất
            </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            { categories.map((category, index) => {
                const slug = category.name
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")   // bỏ dấu
                    .replace(/đ/g, "d")
                    .replace(/[^a-z0-9\s]/g, "")
                    .trim()
                    .replace(/\s+/g, "-");

                return (
                    <Link
                    key={index}
                    href={`/danh-muc-bai-viet/${slug}`}
                    className="group bg-white hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                    <div className="w-20 h-20 flex items-center justify-center text-5xl mb-5 bg-emerald-50 group-hover:bg-emerald-100 rounded-2xl transition-colors">
                        {category.icon}
                    </div>
                    <h3 className="font-medium text-gray-800 text-[17px] leading-tight">
                        {category.name}
                    </h3>
                    </Link>
                );
                })}
            </div>
        </div>
        </div>
    );
}