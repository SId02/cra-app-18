import  { useState } from 'react';
import './ReviewRating.css';

function ReviewRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const colors = {
    1: '#ef5350', 
    2: '#ffee58', 
    3: '#ffee58',
    4: '#ffee58',
    5: '#ffee58',
  };

  const ratings = [
    { value: 1, label: 'Poor' },
    { value: 2, label: 'Average' },
    { value: 3, label: 'Good' },
    { value: 4, label: 'Very Good' },
    { value: 5, label: 'Excellent' },
  ];

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleLeave = () => {
    setHoverRating(0);
  };

  const getStarColor = (starValue) => {
    if (starValue === 1 && (hoverRating >= 1 || rating >= 1)) {
      return colors[1]; 
    } else if (hoverRating >= starValue || rating >= starValue) {
      return colors[starValue]; 
    }
    return 'inherit';
  };

  return (
    <section className="py-6 section">
      <div className="container pb-5 has-text-centered">
        <h1 className="title">Review Rating</h1>
      </div>
      <div className="container pt-5">
        <div className="columns is-centered">
          <div className="column is-5 is-8-desktop">
            <div className="star-container">
              {ratings.map((rate) => (
                <span
                  key={rate.value}
                  onMouseEnter={() => handleHover(rate.value)}
                  onMouseLeave={handleLeave}
                  onClick={() => handleRating(rate.value)}
                  className="star"
                  style={{
                    color: getStarColor(rate.value),
                  }}
                >
                  <i className="fa-regular fa-star"></i>
                </span>
              ))}
            </div>
            {rating > 0 && (
              <p className="has-text-centered mt-3">
                You rated: {ratings.find((rate) => rate.value === rating).label}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewRating;
