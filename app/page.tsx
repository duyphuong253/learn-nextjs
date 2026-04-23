import HeroSection from "@/components/home/HeroSection";
import ClinicCard from "@/components/clinic/ClinicCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const clinics = Array(8).fill({
  title: "Phòng khám Nội tổng quát",
  address: "127 Hồng Hà, Phường Đức Nhuận",
  image: "/phongkham.jpg",
});

export default function Home() {
  return (
    <div>
    <div className="bg-gradient-to-br from-[#f0fdfa] via-[#e0f2fe] to-[#f0fdfa] py-6">
  <div className="max-w-[1200px] mx-auto px-6">
    
    <div className="rounded-3xl overflow-hidden">
      <HeroSection />
    </div>

  </div>
</div>

    <div className="max-w-[1200px] mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Phòng khám nổi bật */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-700">
                Phòng khám nổi bật
              </h2>
              <p className="text-sm text-gray-500">
                Những cơ sở y tế được đánh giá cao nhất
              </p>
            </div>

            <Button variant="ghost" className="text-teal-600">
              Xem tất cả →
            </Button>
          </div>

          {/* Grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clinics.map((item, index) => (
              <ClinicCard key={index} {...item} />
            ))}
          </div>
          {/* ===== PHÒNG KHÁM MỚI ===== */}
          <div className="space-y-6 mt-10">
            
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-teal-700">
                  Phòng khám mới
                </h2>
                <p className="text-sm text-gray-500">
                  Cơ sở y tế mới tham gia gần đây
                </p>
              </div>

              <Button variant="ghost" className="text-teal-600">
                Xem tất cả →
              </Button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clinics.map((item, index) => (
              <ClinicCard key={index} {...item} type="new" />
            ))}
          </div>
          {/* Phòng khám tư */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-700">
                Phòng khám tư
              </h2>
              <p className="text-sm text-gray-500">
                Các phòng khám tư nhân chất lượng cao
              </p>
            </div>

            <Button variant="ghost" className="text-teal-600">
              Xem tất cả →
            </Button>
          </div>

          {/* Grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clinics.map((item, index) => (
              <ClinicCard key={index} {...item} type="default"/>
            ))}
          </div>
          {/* Phòng xét nghiệm */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-700">
                Phòng xét nghiệm
              </h2>
              <p className="text-sm text-gray-500">
                Dịch vụ xét nghiệm chính xác và nhanh chóng
              </p>
            </div>

            <Button variant="ghost" className="text-teal-600">
              Xem tất cả →
            </Button>
          </div>

          {/* Grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clinics.map((item, index) => (
              <ClinicCard key={index} {...item} type="default"/>
            ))}
          </div>
          {/* Phòng khám đa khoa */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-700">
                Phòng khám đa khoa
              </h2>
              <p className="text-sm text-gray-500">
                Khám và điều trị đa chuyên khoa
              </p>
            </div>

            <Button variant="ghost" className="text-teal-600">
              Xem tất cả →
            </Button>
          </div>

          {/* Grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clinics.map((item, index) => (
              <ClinicCard key={index} {...item} type="default"/>
            ))}
          </div>
          {/* Bệnh viện tư */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-teal-700">
                Bệnh viện tư
              </h2>
              <p className="text-sm text-gray-500">
                Bệnh viện tư nhân với trang thiết bị hiện đại
              </p>
            </div>

            <Button variant="ghost" className="text-teal-600">
              Xem tất cả →
            </Button>
          </div>

          {/* Grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clinics.map((item, index) => (
              <ClinicCard key={index} {...item} type="default"/>
            ))}
          </div>
        </div>
                </div>
          

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Bài viết */}
          <Card className="rounded-2xl">
            <CardContent className="p-5 flex justify-between items-center">
              <h3 className="font-semibold text-teal-700">
                Bài viết mới nhất
              </h3>
              <Button variant="ghost">
                Xem tất cả
              </Button>
            </CardContent>
          </Card>

          {/* Đánh giá */}
          <Card className="rounded-2xl">
            <CardContent className="p-5 flex justify-between items-center">
              <h3 className="font-semibold text-teal-700 mb-3">
                Đánh giá mới nhất
              </h3>
              <p>Chưa có đánh giá nào</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}
