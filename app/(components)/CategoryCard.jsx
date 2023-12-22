import Link from "next/link";
import Image from "next/image";

function CategoryCard({ categoryId, image, alt, title }) {
  return (
    <Link href={`/shop/${categoryId}`}>
      <div className=" w-72 h-72 overflow-hidden relative">
        <div className="h-full relative brightness-75">
          <Image
            src={image}
            alt={alt}
            objectPosition="center"
            className="object-cover"
            fill
          />
        </div>
        <h4 className="absolute bottom-2 right-3 text-white font-medium text-xl">
          {title}
        </h4>
      </div>
    </Link>
  );
}

export default CategoryCard;
