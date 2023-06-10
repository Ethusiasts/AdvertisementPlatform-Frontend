export default function RatingStars({ rating }) {
  const starIcons = [];

  // Generate full star icons
  const fullStars = Math.floor(rating);
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<i key={i} className="fas fa-star star-golden"></i>);
  }

  // Check if there's a partial star
  const hasPartialStar = rating % 1 !== 0;

  // Generate partial star icon
  if (hasPartialStar) {
    starIcons.push(
      <i key={fullStars} className="fas fa-star-half star-golden"></i>
    );
  }
  // Generate empty star icons
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starIcons.push(
      <i key={fullStars + i + 1} className="far fa-star star-gray"></i>
    );
  }

  const filledStars = Math.floor(rating);
  return <div className="rating-stars">{starIcons}</div>;
}
