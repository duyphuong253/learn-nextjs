'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { MapPin, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    // 👉 Click outside để đóng dropdown
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsDropdownOpen(false);
        }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // ✅ Danh sách link chuẩn
    const medicalLinks = [
        { label: "Y tế tại nhà", href: "/y-te-tai-nha" },
        { label: "Xét nghiệm", href: "/xet-nghiem" },
        { label: "Tiêm chủng", href: "/tiem-chung" },
        { label: "Phòng mạch", href: "/phong-mach" },
        { label: "Phòng khám", href: "/phong-kham" },
        { label: "Bệnh viện tư", href: "/benh-vien-tu" },
        { label: "Bệnh viện công", href: "/benh-vien-cong" },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        
        {/* Container */}
        <div className="max-w-[1200px] mx-auto px-4">
            <div className="h-16 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4 md:gap-8">
                
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🐊</span>
                </div>
                <span className="text-lg md:text-2xl font-bold text-emerald-600">
                    Review.health
                </span>
                </Link>

                {/* Location */}
                <button className="hidden lg:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm border border-gray-200">
                <MapPin size={18} className="text-emerald-600" />
                <span className="font-medium text-gray-700">
                    Hà Nội
                </span>
                </button>
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                
                <li>
                <Link href="/" className="font-medium text-gray-700 hover:text-emerald-600">
                    Trang chủ
                </Link>
                </li>

                {/* Dropdown */}
                <li className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-emerald-600"
                >
                    Cơ sở y tế
                    <span className={`text-xs transition ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    ▼
                    </span>
                </button>

                {isDropdownOpen && (
                    <div className="absolute top-12 left-0 w-72 bg-white shadow-xl rounded-2xl p-2 border">
                    {medicalLinks.map((item) => (
                        <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 rounded-xl hover:bg-gray-50"
                        onClick={() => setIsDropdownOpen(false)}
                        >
                        {item.label}
                        </Link>
                    ))}
                    </div>
                )}
                </li>

                <li>
                <Link href="/danh-muc-bai-viet" className="font-medium text-gray-700 hover:text-emerald-600">
                    Danh mục
                </Link>
                </li>

                <li>
                <Link href="/bai-viet" className="font-medium text-gray-700 hover:text-emerald-600">
                    Bài viết
                </Link>
                </li>
            </ul>

            {/* RIGHT */}
            <div className="flex items-center gap-2 md:gap-3">
                
                <Link
                href="/gui-yeu-cau"
                className="hidden lg:flex bg-emerald-600 text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-emerald-700"
                >
                + Gửi yêu cầu
                </Link>

                <Link
                href="/dang-nhap"
                className="flex items-center gap-2 border px-3 py-2 rounded-3xl text-sm"
                >
                <Image src="/gmail.png" alt="Google" width={18} height={18} />
                <span className="hidden sm:inline">Đăng nhập</span>
                </Link>

                <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100">
                <Sun size={20} />
                </button>

                <button
                className="md:hidden w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            </div>
        </div>

        {/* MOBILE MENU */}
        <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[500px] border-t' : 'max-h-0'
            }`}
        >
            <ul className="px-4 py-4 flex flex-col gap-4">
            <li><Link href="/">Trang chủ</Link></li>

            {medicalLinks.map((item) => (
                <li key={item.href}>
                <Link href={item.href}>
                    {item.label}
                </Link>
                </li>
            ))}

            <li><Link href="/bai-viet">Bài viết</Link></li>
            </ul>
        </div>
        </nav>
    );
}