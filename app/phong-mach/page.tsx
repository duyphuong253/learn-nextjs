import Link from 'next/link';
import Image from 'next/image';

export default function PhongMachPage() {
    return (
        <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-emerald-600">Trang chủ</Link>
            <span>›</span>
            <span className="text-emerald-700 font-medium">Loại hình: xet-nghiem</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-1">xet-nghiem</h1>
            <p className="text-gray-600 text-lg">Tìm thấy 49 cơ sở y tế</p>

            {/* Danh sách cơ sở y tế */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="relative h-52">
                {/* <Image 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e417?w=800" 
                    alt="Gentis" 
                    fill 
                    className="object-cover" 
                /> */}
                </div>
                <div className="p-5">
                <h3 className="font-semibold text-lg leading-tight mb-1">
                    Trung tâm xét nghiệm Gentis
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                    8/24 Nguyễn Đình Khơi, Phường 4, Quận Tân Bình, TP.HCM
                </p>
                <div className="flex items-center gap-2 mt-4">
                    <span className="text-yellow-400 text-lg">★★★★☆</span>
                    <span className="font-medium">4.0</span>
                    <span className="text-gray-400 text-sm">(0 đánh giá)</span>
                </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="relative h-52">
                {/* <Image 
                    src="https://images.unsplash.com/photo-1519494026892-80a3d5e8b1e4?w=800" 
                    alt="Diag" 
                    fill 
                    className="object-cover" 
                /> */}
                </div>
                <div className="p-5">
                <h3 className="font-semibold text-lg leading-tight mb-1">
                    Trung tâm xét nghiệm và chẩn đoán Y khoa Diag
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                    414 - 420 Cao Thắng, Phường 12, Quận 10, TP.HCM
                </p>
                <div className="flex items-center gap-2 mt-4">
                    <span className="text-yellow-400 text-lg">★★★★☆</span>
                    <span className="font-medium">4.0</span>
                    <span className="text-gray-400 text-sm">(0 đánh giá)</span>
                </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="relative h-52">
                {/* <Image 
                    src="https://images.unsplash.com/photo-1559757148-5e995136c87b?w=800" 
                    alt="Diag" 
                    fill 
                    className="object-cover" 
                /> */}
                </div>
                <div className="p-5">
                <h3 className="font-semibold text-lg leading-tight mb-1">
                    Trung tâm xét nghiệm và chẩn đoán Y khoa Diag
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                    309 Trần Phú, Phường 8, Quận 5, TP.HCM
                </p>
                <div className="flex items-center gap-2 mt-4">
                    <span className="text-yellow-400 text-lg">★★★★☆</span>
                    <span className="font-medium">4.0</span>
                    <span className="text-gray-400 text-sm">(0 đánh giá)</span>
                </div>
                </div>
            </div>
            </div>

            {/* Pagination */}
            <div className="text-center text-gray-600 mt-12">
            Trang 1 / 1 (1 - 3 trong tổng số 49 kết quả)
            </div>
        </div>
        </div>
    );
}