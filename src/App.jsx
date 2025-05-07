import RatingButton from "./components/RatingButton";
import { useState } from "react";
import ThankYouCard from "./components/ThankYouCard";
import starIcon from "./assets/images/icon-star.svg";

function App() {

  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (index) => {
    setRating(index);
  };

  const handleSubmitClick = () => {
    if (rating === 0) return;
    setIsSubmitted(!isSubmitted);
  }

  const renderButtons = [1, 2, 3, 4, 5].map((index) => {
    return (
      <RatingButton
        handleRatingClick={handleRatingClick}
        key={index}
        rating={rating}
      >
        {index}
      </RatingButton>
    )
  });

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="rating-card
        bg-gradient-to-b from-[#222933] to-[#171e26] text-white
        flex flex-col justify-center items-center
        rounded-3xl max-w-[90%] px-5 pt-7 pb-9
        sm:max-w-md sm:px-9 sm:pt-8 sm:pb-10 xs:max-w-sm 
        ">
        {isSubmitted ? <ThankYouCard rating={rating} /> : (
          <section className="flex flex-col justify-center items-baseline gap-6">
            <div className="p-[clamp(0.5rem,1.25vw,0.875rem)] bg-grey-light rounded-full 
                w-[clamp(2.5rem,5vw,3.25rem)] h-[clamp(2.5rem,5vw,3.25rem)] 
                flex justify-center items-center">
              <img
                src={starIcon}
                alt="Star icon"
                className="w-[clamp(0.875rem,1.75vw,1.125rem)] relative top-[0.5px]"
              />
            </div>
            <h1 className="text-[clamp(1.5rem,5vw,1.875rem)] font-bold leading-[1.2]">
              How did we do?
            </h1>
            <p className="text-grey-500 text-[clamp(0.9375rem,1.25vw,1.0625rem)]">
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>

            <div className="flex flex-row justify-center align-center gap-5 py-2 self-center">
              {renderButtons}
            </div>

            <button
              onClick={handleSubmitClick}
              className="w-full bg-primary-500 text-grey-950 font-bold
            py-3 md:py-[0.8125rem]  /* 13px */
            rounded-full tracking-widest cursor-pointer
            hover:bg-white transition-colors duration-200"
              aria-live="polite"
            >
              SUBMIT
            </button>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;