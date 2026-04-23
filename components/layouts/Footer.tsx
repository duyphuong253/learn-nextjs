import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 mt-16">
        
        {/* TOP */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Logo + mô tả */}
            <div>
            <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🐸</span>
                <h2 className="text-xl font-bold text-emerald-600">
                Review.health
                </h2>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
                Nền tảng đánh giá và tìm kiếm các cơ sở y tế uy tín tại Việt Nam.
                Giúp bạn tìm được dịch vụ chăm sóc sức khỏe tốt nhất.
            </p>

            <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Vì sức khỏe cộng đồng</span>
            </div>
            </div>

            {/* Liên kết nhanh */}
            <div>
            <h3 className="font-semibold text-gray-800 mb-4">
                Liên kết nhanh
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-emerald-600 cursor-pointer">Trang chủ</li>
                <li className="hover:text-emerald-600 cursor-pointer">Cơ sở y tế</li>
                <li className="hover:text-emerald-600 cursor-pointer">Bài viết</li>
                <li className="hover:text-emerald-600 cursor-pointer">Gửi yêu cầu</li>
            </ul>
            </div>

            {/* Danh mục */}
            <div>
            <h3 className="font-semibold text-gray-800 mb-4">
                Danh mục
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-emerald-600 cursor-pointer">Danh mục bài viết</li>
                <li className="hover:text-emerald-600 cursor-pointer">Tìm kiếm</li>
                <li className="hover:text-emerald-600 cursor-pointer">Về chúng tôi</li>
                <li className="hover:text-emerald-600 cursor-pointer">Chính sách bảo mật</li>
            </ul>
            </div>

            {/* Thông tin */}
            <div>
            <h3 className="font-semibold text-gray-800 mb-4">
                Thông tin
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-emerald-600 cursor-pointer">Liên hệ</li>
            </ul>
            </div>
        </div>

        {/* BOTTOM */}
        <div className="">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            
            <p>© 2026 Review Health. Tất cả các quyền được bảo lưu.</p>

            <div className="flex gap-6">
                <span className="hover:text-emerald-600 cursor-pointer">
                Điều khoản sử dụng
                </span>
                <span className="hover:text-emerald-600 cursor-pointer">
                Chính sách bảo mật
                </span>
                <span className="hover:text-emerald-600 cursor-pointer">
                Cookies
                </span>
            </div>

            </div>
        </div>
        </footer>
    );
}