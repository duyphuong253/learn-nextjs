import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            
            {/* LEFT */}
            <div className="space-y-8">
            <div className="space-y-6">
                <h1 className="text-5xl font-bold text-slate-900">
                Xem và viết đánh giá.
                </h1>

                <h2 className="text-6xl font-bold text-emerald-600">
                Review luôn
                </h2>

                <div className="max-w-lg">
                <p className="text-xl text-slate-700">
                    <span className="font-semibold">#1</span> Nền tảng đánh giá phòng khám
                </p>
                <p className="text-lg text-slate-600 mt-3">
                    Hơn 5.000 phòng khám đã có mặt tại đây
                </p>
                </div>
            </div>

            {/* Search */}
            <div className="max-w-xl relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                placeholder="Tìm kiếm phòng khám, bác sĩ..."
                className="pl-12 py-7 text-lg rounded-2xl border-2 focus:border-emerald-500"
                />
            </div>

            {/* Stats */}
            <div className="flex gap-6 text-sm text-slate-500">
                <span>Hơn 5.000 phòng khám</span>
                <span>Đánh giá thật</span>
            </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">
            <img
                src="header-img.jpg"
                className="rounded-3xl shadow-2xl max-w-md"
            />
            </div>
        </div>
        </div>
    );
}