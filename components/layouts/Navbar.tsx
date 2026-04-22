'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50" role="navigation">
        <div className="max-w-7xl mx-auto px-4">
            <div className="h-16 flex items-center justify-between">

            {/* Logo + Location */}
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2">
                <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">🐊</span>
                </div>
                <span className="text-2xl font-bold text-emerald-600 tracking-tight">
                    Review.health
                </span>
                </Link>

                <button className="hidden md:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm border border-gray-200">
                <MapPin size={18} className="text-emerald-600" />
                <span className="font-medium text-gray-700">Thành phố Hà Nội</span>
                </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
                <li>
                <Link href="/" className="font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                    Trang chủ
                </Link>
                </li>

                {/* Dropdown Cơ sở y tế - Dùng Click thay vì Hover */}
                <li className="relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-emerald-600 transition-colors focus:outline-none"
                >
                    Cơ sở y tế
                    <span className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    ▼
                    </span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute top-12 left-0 bg-white shadow-xl rounded-2xl py-3 px-2 w-72 border border-gray-100 z-50">
                    <Link 
                        href="/y-te-tai-nha" 
                        className="block px-4 py-3 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        Y tế tại nhà
                    </Link>
                    <Link 
                        href="/xet-nghiem" 
                        className="block px-4 py-3 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        Xét nghiệm
                    </Link>
                    <Link 
                        href="/tiem-chung" 
                        className="block px-4 py-3 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        Tiêm chủng
                    </Link>
                    <Link 
                        href="/phong-mach" 
                        className="block px-4 py-3 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        Phòng mạch
                    </Link>
                    <Link 
                        href="/phong-kham" 
                        className="block px-4 py-3 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        Phòng khám
                    </Link>
                    <Link 
                        href="/benh-vien-tu" 
                        className="block px-4 py-3 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        Bệnh viện tư
                    </Link>
                    <Link 
                        href="/benh-vien-cong" 
                        className="block px-4 py-3 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        Bệnh viện công
                    </Link>
                    </div>
                )}
                </li>

                <li>
                <Link href="/danh-muc-bai-viet" className="font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                    Danh mục bài viết
                </Link>
                </li>

                <li>
                <Link href="/bai-viet" className="font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                    Bài viết
                </Link>
                </li>
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-3">
                <Link
                href="/gui-yeu-cau"
                className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-3xl font-medium transition-all"
                >
                + Gửi yêu cầu
                </Link>

                <Link
                href="/dang-nhap"
                className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-3xl text-sm font-medium transition-colors"
                >
                <img 
                    src='gmail.png'
                    alt="Google" 
                    width={20} 
                    height={20}
                    className="rounded-sm"
                    /><span>Đăng nhập</span> 
                </Link>

                <button className="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-gray-100 transition-colors">
                <Sun size={20} className="text-gray-600" />
                </button>

                <button
                className="md:hidden w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white">
            <ul className="px-4 py-6 flex flex-col gap-6 text-lg">
                <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Trang chủ</Link></li>
                <li><Link href="/co-so-y-te" onClick={() => setIsMobileMenuOpen(false)}>Cơ sở y tế</Link></li>
                <li><Link href="/y-te-tai-nha" onClick={() => setIsMobileMenuOpen(false)}>Y tế tại nhà</Link></li>
                <li><Link href="/danh-muc-bai-viet" onClick={() => setIsMobileMenuOpen(false)}>Danh mục bài viết</Link></li>
                <li><Link href="/bai-viet" onClick={() => setIsMobileMenuOpen(false)}>Bài viết</Link></li>
            </ul>
            </div>
        )}
        </nav>
    );
}