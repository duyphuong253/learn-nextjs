import { Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdfa] via-[#e0f2fe] to-[#f0fdfa] ">
      {/* Header / Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 px-6 md">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Cột trái - Nội dung */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Xem và viết đánh giá.
              </h1>

              <h2 className="text-6xl lg:text-7xl font-bold text-emerald-600 tracking-tighter">
                Review luôn
              </h2>

              <div className="max-w-lg">
                <p className="text-xl text-slate-700 leading-relaxed">
                  <span className="font-semibold">#1</span> Nền tảng đánh giá phòng khám, bác sĩ và dịch vụ y tế.
                </p>
                <p className="text-lg text-slate-600 mt-3">
                  Hơn 5.000 phòng khám đã có mặt tại đây và được đánh giá bởi cộng đồng.
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-xl">
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <Input
                  type="text"
                  placeholder="Tìm kiếm phòng khám, bác sĩ..."
                  className="pl-12 py-7 text-lg rounded-2xl border-2 border-slate-200 focus:border-emerald-500 shadow-lg focus:shadow-xl transition-all duration-300 bg-white"
                />
                
              </div>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span>Hơn 5.000 phòng khám</span>
              </div>
              <div>Đánh giá thật từ cộng đồng</div>
            </div>
          </div>

          {/* Cột phải - Hình ảnh */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="header-img.jpg"
                alt="Phòng khám hiện đại"
                className="rounded-3xl shadow-2xl w-2xl h-auto object-cover"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 to-transparent rounded-3xl" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}