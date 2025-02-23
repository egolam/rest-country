import Image from "next/image";

const ImageWithFallback = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className="relative w-full h-1/2 overflow-hidden">
      <Image
        src={src}
        width={0}
        height={0}
        className="w-66 h-full object-cover"
        alt={name}
        priority
        placeholder="empty"
      />
    </div>
  );
};

export default ImageWithFallback;
