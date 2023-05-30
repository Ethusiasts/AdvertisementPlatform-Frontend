export default function RatingStars({ rating }) {
  const filledStars = Math.floor(rating);
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        const starClass = index < filledStars ? "filled" : "empty";

        return <span key={index} className={`star ${starClass}`} />;
      })}
    </div>
  );
}
