import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Props {
    title: string;
    address: string;
    image: string;
    rating?: number;
    type?: "featured" | "new" | "default";
}

export default function ClinicCard({
    title,
    address,
    image,
    rating = 4,
    type = "featured",
    }: Props) {

    const badgeConfig = {
        featured: {
        label: "Nổi bật",
        variant: "featured" as const,
        },
        new: {
        label: "Mới",
        variant: "new" as const,
        },
        default: {
        label: "",
        variant: "default" as const,
        },
    };

    return (
        <Card className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative">
            <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="w-full h-40 object-cover"
            />

            {/* Badge */}
            {type !== "default" && type && (
            <Badge
                variant={badgeConfig[type].variant}
                className="absolute top-2 left-2 shadow-sm"
            >
                {badgeConfig[type].label}
            </Badge>
            )}
        </div>

        {/* Content */}
        <CardContent className="p-4 space-y-2">
            
            <h3 className="font-semibold text-sm leading-5 line-clamp-2">
            {title}
            </h3>

            <p className="text-xs text-gray-500 line-clamp-1">
            {address}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                key={i}
                size={14}
                fill={i < rating ? "#facc15" : "none"}
                />
            ))}
            <span className="text-xs text-gray-500 ml-1">
                {rating}.0
            </span>
            </div>

        </CardContent>
        </Card>
    );
}