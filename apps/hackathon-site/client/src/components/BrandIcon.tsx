interface BrandIconProps {
  className?: string;
  imageClassName?: string;
  alt?: string;
}

export default function BrandIcon({ className = "", imageClassName = "", alt = "" }: BrandIconProps) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <img
        src="/assets/oracle-symbol.png"
        alt={alt}
        aria-hidden={alt === "" ? true : undefined}
        className={`h-full w-full object-contain ${imageClassName}`}
      />
    </span>
  );
}
