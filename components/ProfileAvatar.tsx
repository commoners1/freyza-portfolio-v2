import Image from "next/image";
import { site } from "@/data/site";

interface ProfileAvatarProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { className: "w-16 h-16", px: 64 },
  md: { className: "w-24 h-24 sm:w-28 sm:h-28", px: 112 },
  lg: { className: "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36", px: 144 },
};

export function ProfileAvatar({ size = "lg", className = "" }: ProfileAvatarProps) {
  const dimensions = sizeMap[size];

  return (
    <div
      className={`relative rounded-full p-[3px] bg-gradient-to-br from-nova-cyan to-nova-purple shadow-[0_0_30px_rgba(0,245,255,0.25)] ${dimensions.className} ${className}`}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden bg-nova-dark border border-white/10">
        <Image
          src={site.profileImage ?? "/profile.svg"}
          alt={site.name}
          fill
          className="object-cover"
          sizes={`${dimensions.px}px`}
          priority
        />
      </div>
    </div>
  );
}
