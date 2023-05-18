export default function RecommendedCard({
  location,
  description,
  imageSrc,
  alt,
}) {
  return (
    <div className="recommended-card flex-1 m-4 bg-white rounded-lg overflow-hidden ">
      <img src={imageSrc} alt={alt} className="h-48 w-full object-cover" />
      <div className="p-4">
        <p className="text-xl font-medium text-gray-800 pt-8">{location}</p>
        <p className="text-xl font-medium text-[#7D7D7D]">{description}</p>
      </div>
    </div>
  );
}
