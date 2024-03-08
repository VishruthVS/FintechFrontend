import Image from "next/image";

const NewsCard = ({ title, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={800}
        height={450}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
