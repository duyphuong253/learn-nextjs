'use client';

import { Search, Clock, TrendingUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function BaiVietPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tất cả danh mục');

    // Danh sách bài viết phổ biến (sidebar)
    const popularPosts = [
        "Cách chọn bệnh viện phù hợp cho gia đình",
        "Top 10 phòng khám nhi uy tín tại Hà Nội",
        "Kinh nghiệm khám sức khỏe định kỳ",
        "Hướng dẫn đặt lịch khám online hiệu quả",
        "So sánh chi phí khám bệnh tại các bệnh viện",
    ];

    const faqs = [
        "Làm thế nào để đặt lịch khám qua website?",
        "Website có thu phí khi sử dụng dịch vụ không?",
        "Thông tin trên website có chính xác không?",
        "Tôi có thể hủy lịch khám đã đặt không?",
        "Làm sao để đánh giá cơ sở y tế?",
    ];

    return (
        <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-emerald-700 mb-8">
            Danh sách bài viết
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">

                {/* Search Bar */}
                <form className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-8">
                <div className="flex flex-col md:flex-row gap-4 items-end">

                    {/* Search */}
                    <div className="flex-1 flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Tìm kiếm bài viết
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập từ khóa tìm kiếm..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500"
                    />
                    </div>

                    {/* Category */}
                    <div className="md:w-72 flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                        Danh mục
                    </label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-5 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 bg-white"
                    >
                        <option value="">Tất cả danh mục</option>
                        <option value="kham-benh">Khám bệnh</option>
                        <option value="benh-vien">Bệnh viện</option>
                        <option value="suc-khoe">Sức khỏe gia đình</option>
                        <option value="online">Lịch khám online</option>
                    </select>
                    </div>

                    {/* Button */}
                    <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl flex items-center gap-2 font-medium transition-all active:scale-95"
                    >
                    <Search size={20} />
                    Tìm kiếm
                    </button>

                </div>
                </form>

                {/* Empty State */}
                <div className="bg-white rounded-3xl py-20 px-6 text-center border border-gray-100">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    📄
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Không có bài viết nào
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                    Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.
                </p>
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
                {/* Bài viết mới nhất */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                    <Clock className="text-emerald-600" />
                    <h3 className="font-semibold text-lg">Bài viết mới nhất</h3>
                </div>
                <div className="space-y-4">
                    {popularPosts.slice(0, 3).map((post, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-4 last:border-none last:pb-0 cursor-pointer hover:text-emerald-600 transition-colors">
                        {post}
                    </div>
                    ))}
                </div>
                </div>

                {/* Bài viết được đọc nhiều */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                    <TrendingUp className="text-emerald-600" />
                    <h3 className="font-semibold text-lg">Bài viết được đọc nhiều</h3>
                </div>
                <div className="space-y-4">
                    {popularPosts.slice(1, 5).map((post, idx) => (
                    <div key={idx} className="flex gap-3 cursor-pointer hover:text-emerald-600 transition-colors">
                        <span className="text-emerald-600 font-medium">0{idx + 1}</span>
                        <p className="line-clamp-2 text-sm">{post}</p>
                    </div>
                    ))}
                </div>
                </div>

                {/* Câu hỏi thường gặp */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                    <span className="text-2xl">❓</span>
                    <h3 className="font-semibold text-lg">Câu hỏi thường gặp</h3>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                    <div 
                        key={idx}
                        className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none cursor-pointer hover:text-emerald-600 transition-colors"
                    >
                        <p className="text-sm pr-4">{faq}</p>
                        <ChevronDown size={18} className="text-gray-400" />
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}